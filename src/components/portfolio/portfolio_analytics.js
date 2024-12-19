import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select"; // Install this library using: npm install react-select
import "./PortfolioManager.css";
import {Navigate} from "react-router-dom";
import stockData from '../../resources/stocklist.json';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import TransactionsTable from "./transactions_table";
import PortfolioComposition from "./port_comp";
import "../sidenavdiv.css";
import Plot from "react-plotly.js";
import {fetchPortOptimize, fetchSecAnalysis} from "../../api";
import DataTable from "../datatable"; // Include this CSS file to style the sidebar layout
import settings from '../../resources/settings.json';

var url = settings.dev_server;
if (settings.environment === "production"){
    url = settings.prod_server;
}

const formatDate = (date) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
};




function PortMetrics({data}){
    return (
            <DataTable data={JSON.parse(data)}/>
    )
}

function Optimum({data}) {
    return (
            <div>
            <DataTable data={JSON.parse(data.weights)}/>
            {/*</div>*/}
            {/*<div>*/}
            <DataTable data={JSON.parse(data.metrics)}/>
            </div>
    );
}



// Correlation Matrix Heatmap

function CorrelationHeatmap({ data, labels }) {
  return (
    <Plot
      data={[
        {
          z: data,                          // Correlation matrix values
          x: labels,                         // Stock names for x-axis
          y: labels,                         // Stock names for y-axis
          type: 'heatmap',
          colorscale: 'Viridis',
          text: data.map(row => row.map(val => val.toFixed(2))), // Display correlation values
          hoverongaps: false,
          showscale: true
        },
      ]}
      layout={{
        title: 'Correlation Matrix Heatmap',
        xaxis: {
          title: 'Stocks',
          tickmode: 'array',
          tickvals: labels,
          tickangle: -45,
          side: 'bottom'
        },
        yaxis: {
          title: 'Stocks',
          tickmode: 'array',
          tickvals: labels
        },
        annotations: labels.flatMap((labelX, i) =>
          labels.map((labelY, j) => ({
            x: labelX,
            y: labelY,
            text: data[i][j].toFixed(2),   // Show correlation values as annotations
            showarrow: false,
            font: {
              color: 'white',
              size: 10
            }
          }))
        )
      }}
    />
  );
}

//Efficient Frontier Plot

function EfficientFrontierPlot({data}) {

 if (!data) {
    return (
        <div>Graph Loading ...</div>);}
    else
    {
        console.log('INSIDE EFF FRONTIER', data);
        // Find max Sharpe ratio
        const maxSharpeIndex = data.Sharpe_Ratio.indexOf(Math.max(...data.Sharpe_Ratio));
        const maxSharpePoint = {
            x: data.Volatility[maxSharpeIndex],
            y: data.Return[maxSharpeIndex],
        };

        // Find min volatility
        const minVolIndex = data.Volatility.indexOf(Math.min(...data.Volatility));
        const minVolPoint = {
            x: data.Volatility[minVolIndex],
            y: data.Return[minVolIndex],
        };

        return (
            <div>
                <h2>Efficient Frontier</h2>
                {/*<button onClick={fetchEfficientFrontier} disabled={isLoading}>*/}
                {/*    {isLoading ? "Loading..." : "Fetch Efficient Frontier"}*/}
                {/*</button>*/}

                {data.Return && (
                    <Plot
                        data={[
                            {
                                x: data.Volatility,
                                y: data.Return,
                                mode: "markers",
                                marker: {
                                    size: 5,
                                    color: data.Sharpe_Ratio,
                                    colorscale: "Viridis",
                                    colorbar: {title: "Sharpe Ratio",color : "white"},
                                    showscale: true,
                                },
                                name: "Portfolios",
                                showlegend: false,
                            },
{
                        x: [maxSharpePoint.x],
                        y: [maxSharpePoint.y],
                        mode: "markers + text",
                        marker: { color: "red", size: 12, symbol: "star" },
                        name: "Max Sharpe Ratio",
                        showlegend: false,

                    },
                    {
                        x: [minVolPoint.x],
                        y: [minVolPoint.y],
                        mode: "markers + text",
                        marker: { color: "blue", size: 12, symbol: "diamond" },
                        name: "Min Volatility",
                        showlegend: false,
                    },
                        ]}
                        layout={{
                            title: {
                                text: "Efficient Frontier",
                                font: { color: "white" },
                            },
                            // xaxis: {title: "Volatility (Risk)"},
                            // yaxis: {title: "Return"},
                            // template: "plotly_dark",
                        xaxis: {
                            title: { text: "Volatility (Risk)", font: { color: "white" } },
                            tickfont: { color: "white" },
                            gridcolor: "gray",
                        },
                        yaxis: {
                            title: { text: "Return", font: { color: "white" } },
                            tickfont: { color: "white" },
                            gridcolor: "gray",
                        },
                        paper_bgcolor: "#1e1e1e", // Dark background for the plot
                        plot_bgcolor: "#1e1e1e", // Dark background for the grid
                        annotations: [
                                    {
                                      x: maxSharpePoint.x,
                                      y: maxSharpePoint.y,
                                      xref: "x",
                                      yref: "y",
                                      text: "Max Sharpe Ratio",
                                      showarrow: true,
                                      arrowhead: {size: 7, color: "white" },
                                      ax: 0,
                                      ay: -40,
                                      font: { color: "white" },
                                    },
                                    {
                                      x: minVolPoint.x,
                                      y: minVolPoint.y,
                                      xref: "x",
                                      yref: "y",
                                      text: "Min Volatility",
                                      showarrow: true,
                                      arrowhead: {size: 7, color: "white" },
                                      ax: 0,
                                      ay: -40,
                                      font: { color: "white" },
                                    },
                                  ],
                        }}
                        config={{ responsive: true }}
                    />
                )}
            </div>
        );
    }
}


const PortfolioAnalytics = (portfolioId) => {

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Home");
  const [dataP, setDataP] = useState(null);
  // const portfolio = ['IOC','GLENMARK', "INFY", "HDFCBANK", "ICICIBANK",'ITC','TCS','TATAMOTORS','TATAPOWER','ASIANPAINT'];

  // Define content for each tab
    const [portfolios, setPortfolios] = useState([]);
    const [portfolioName, setPortfolioName] = useState("");
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [items, setItems] = useState([]);
    const [portNames, setPortNames] = useState([]);

    const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
    const [selectedName, setSelectedName] = useState(null); // State for the search box value

    useEffect(() => {
        fetchPortfolios();
    }, []);
        console.log('DEFAULT STATE PORT ID ',selectedPortfolio);
    console.log('DEFAULT STATE PORT ITEMS ',items);
    const fetchPortfolios = async () => {
        try{
    const response = await axios.get(`${url}/api/portfolios/`,
        { headers: {
                    Authorization: `Bearer ${token}`,  // Pass the JWT token in Authorization header
                },
            withCredentials: true } );
    console.log(response)
    const fetchedPortfolios = response.data;

    setPortfolios(fetchedPortfolios);
    if (fetchedPortfolios.length > 0) {
        const defaultPortfolioId = fetchedPortfolios[0].id; // Use the first portfolio as default
        setSelectedPortfolio(defaultPortfolioId);
        fetchItems(defaultPortfolioId); // Fetch items for the default portfolio
        // console.log('DEFAULT STATE PORT ID ',defaultPortfolioId);
        // console.log('DEFAULT STATE PORT ITEMS ',items);
        //
        // if (items && items.length > 0) {
        //     const port = [];
        //     items.map((item) => (port.push(item.name)));
        //     setPortNames(port);
        //     console.log('DEFAULT STATE PORT NAMES ',portNames);
        //     fetchPortOptimize({portfolio : portNames})
        //     .then(data => setDataP(JSON.parse(data)))
        //         .catch(error => console.error("Error fetching data:", error));
        //     console.log('DEFAULT STATE PORT OPT DATA ', dataP);
        // };
    }
        } catch (error) {
        console.error("Error fetching portfolios:", error);
    }
    };
    // console.log('REACT portfolio fetch ',portfolios)
    const fetchItems = async (portfolioId) => {
        try{
        const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage

        const data = {
            action: "fetchP",
            portfolio_id: portfolioId,
            };
        // const data = { portfolio_id: portfolioId };
        const response = await axios.post(`${url}/api/portfolios/items/`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,  // Pass the JWT token in Authorization header
                    'Content-Type': 'application/json',
                },
            withCredentials: true,
            } );
        setItems(response.data);
        } catch (error) {
            console.error("PORTCOMP -> Error fetching portfolio items:", error);
        }
    };

    useEffect(() => {
    if (selectedPortfolio) {
    fetchItems(selectedPortfolio);
    }}, [selectedPortfolio])

    // if (selectedPortfolio) {
    // if (items && items.length > 0) {
    //     const port = [];
    //     items.map((item) => (port.push(item.name)));
    //     setPortNames(port);
    // }}


    useEffect(() => {
    if (selectedPortfolio) {
    if (items && items.length > 0) {
        const port = [];
        items.map((item) => (port.push(item.name)));
        setPortNames(port);
        // console.log(' NEXT STATE PORT NAMES ',portNames);
        fetchPortOptimize({portfolio : portNames})
        .then(data => setDataP(JSON.parse(data)))
            .catch(error => console.error("Error fetching data:", error));
        // console.log('NEXT STATE PORT OPT DATA ', dataP);
    };
  }}, [selectedPortfolio]);
    // console.log(' NEXT STATE PORT NAMES ',portNames);
    // console.log('NEXT STATE PORT OPT DATA ', dataP);

    // console.log('PORT NAMES 2',portNames);
    // if (portNames && portNames.length > 0) {
    //     console.log('PORT NAMES 3',portNames);
    //     fetchPortOptimize({portfolio :["IOC", "RECLTD", "SBIN", "TATAMOTORS", "TATASTEEL", "TCS"]})
    //         .then(data => setDataP(JSON.parse(data)))
    //         .catch(error => console.error("Error fetching data:", error));
    //     console.log('PORT OPT DATA 2', dataP);
    // }
    // Handle portfolio switching
    const onSwitchPortfolio = (portfolioId) => {
        // alert('SWITCHING to '+portfolioId)
        setSelectedPortfolio(portfolioId); // Fetch items for the new portfolio
        // fetchItems(selectedPortfolio);

    };

    const onSelectPortfolio = () => {
        if (selectedPortfolio) {
            fetchItems(selectedPortfolio);
        if (items && items.length > 0) {
            const port = [];
            items.map((item) => (port.push(item.name)));
            setPortNames(port);
            console.log(' NEXT STATE PORT NAMES ',portNames);
            fetchPortOptimize({portfolio : portNames})
            .then(data => setDataP(JSON.parse(data)))
                .catch(error => console.error("Error fetching data:", error));
            console.log('NEXT STATE PORT OPT DATA ', dataP);
        }else{
            setDataP(null);
        };
        }

    };

    const options = stockData.stocks.map((stock) => ({
        value: stock.symbol,
        label: `${stock.name} (${stock.symbol})`,
    }));

    const renderContent = () => {

    switch (activeTab) {
      case "Summary":
        // console.log('PORT OPT DATA PORTMETRICS 2',data.port_metrics);
        return  dataP ? (<div align={"center"}>
      <PortMetrics data={dataP.port_metrics} />
            </div>) : (
                <p>Loading data...</p>
              );
      case "Composition":
        return (<div align={"center"}>
            <PortfolioComposition portfolioID={selectedPortfolio}/>
        </div>);
      case "Optimum":
        return dataP ? (<div align={"center"}>
      <Optimum data={dataP.optimization_result} />
                </div>): (
                <p>Loading data...</p>
              );
      case "Correlation":
        return dataP ? (<div align={"center"}>
      <CorrelationHeatmap data={dataP.correlation} labels={portNames} />
                </div>) : (
                <p>Loading data...</p>
              );
      case "Efficient Frontier":
        return dataP ? (<div align={"center"}>
        <EfficientFrontierPlot data={dataP.efficient_frontier} />;
        </div>) : (
                <p>Loading data...</p>
              );
      default:
        return <div>Select a tab to view content.</div>;
    }
  };


    // console.log('TOKEN-->',localStorage.getItem('authToken'))
    return (
        localStorage.getItem('authToken') ?
        <div className="portfolio-manager" style={{width: "10000px"}}>
                <h2>Portfolio Manager</h2>
                <div className="portfolio-header">
                <h4 style={{padding:"8px"}}>Portfolio</h4>
                <select
                    className="portfolio-dropdown"
                    value={selectedPortfolio || ""}
                    onChange={(e) => onSwitchPortfolio(e.target.value)} >
                    {portfolios.map((portfolio) => (
                        <option key={portfolio.id} value={portfolio.id}>
                            {portfolio.name}
                        </option>
                    ))}
                </select>
                <button className="create-portfolio-btn" onClick={onSelectPortfolio}>
                    Go
                </button>
            </div>

    <div className="app-container">
      {/* Sidebar navigation */}
      <div className="sidebar">
        <div
          className={`tab ${activeTab === "Summary" ? "active" : ""}`}
          onClick={() => setActiveTab("Summary")}
        >
          Summary
        </div>
        <div
          className={`tab ${activeTab === "Composition" ? "active" : ""}`}
          onClick={() => setActiveTab("Composition")}
        >
          Composition
        </div>
        <div
          className={`tab ${activeTab === "Optimum" ? "active" : ""}`}
          onClick={() => setActiveTab("Optimum")}
        >
          Optimum
        </div>
        <div
          className={`tab ${activeTab === "Correlation" ? "active" : ""}`}
          onClick={() => setActiveTab("Correlation")}
        >
          Correlation
        </div>
        <div
          className={`tab ${activeTab === "Efficient Frontier" ? "active" : ""}`}
          onClick={() => setActiveTab("Efficient Frontier")}
        >
          Efficient Frontier
        </div>
      </div>

      {/* Main content area */}
      <div className="content">{renderContent()}</div>
    </div>
        </div>
            :
            // <LoginPage/>
            <Navigate to="/login"/>
    );
};

export default PortfolioAnalytics;
