import React, {useEffect, useState} from "react";
import "./sidenavdiv.css";
import Plot from "react-plotly.js";
import {fetchPortOptimize, fetchSecAnalysis} from "../api";
import DataTable from "./datatable"; // Include this CSS file to style the sidebar layout


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


function PortOptimization({portfolio}) {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Home");
  const [data, setData] = useState(null);
  // const portfolio = ['IOC','GLENMARK', "INFY", "HDFCBANK", "ICICIBANK",'ITC','TCS','TATAMOTORS','TATAPOWER','ASIANPAINT'];
  useEffect(() => {
    fetchPortOptimize({portfolio})
      .then(data => setData(JSON.parse(data)))
      .catch(error => console.error("Error fetching data:", error));
    console.log('PORT OPT DATA 1',data);
  }, []);

    console.log('PORT OPT DATA 2',data);

  // Define content for each tab
  const renderContent = () => {

    switch (activeTab) {
      case "Summary":
        // console.log('PORT OPT DATA PORTMETRICS 2',data.port_metrics);
        return  data ? (<div align={"center"}>
      <PortMetrics data={data.port_metrics} />
            </div>) : (
                <p>Loading data...</p>
              );
      case "Optimum":
        return data ? (<div align={"center"}>
      <Optimum data={data.optimization_result} />
                </div>): (
                <p>Loading data...</p>
              );
      case "Correlation":
        return data ? (<div align={"center"}>
      <CorrelationHeatmap data={data.correlation} labels={portfolio} />
                </div>) : (
                <p>Loading data...</p>
              );
      case "Efficient Frontier":
        return data ? (<div align={"center"}>
        <EfficientFrontierPlot data={data.efficient_frontier} />;
        </div>) : (
                <p>Loading data...</p>
              );
      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  return (
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
  );
};

export default PortOptimization;
