import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select"; // Install this library using: npm install react-select
import "./PortfolioManager.css";
import {Navigate} from "react-router-dom";
import stockData from '../../resources/stocklist.json';
import DynamicStockCharts from "../dynamicStockCharts_plotly";


const DisplayValueSeries = (data) => {
    return(<div>
        <DynamicStockCharts graphdata={data}/>
    </div>);
}

const DisplayXIRR = (data) => {

}
const PortfolioPerformance = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [portfolioName, setPortfolioName] = useState("");
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [performance, setPerformance] = useState([]);
    const [portfolioXIRR, setPortfolioXIRR] = useState([]);

    const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
    const [selectedName, setSelectedName] = useState(null); // State for the search box value

    useEffect(() => {
        fetchPortfolios();
    }, []);

    const fetchPortfolios = async () => {
        try{
    const response = await axios.get("http://127.0.0.1:8000/api/portfolios/",
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
    }
        } catch (error) {
        console.error("Error fetching portfolios:", error);
    }
    };
    console.log('REACT portfolio fetch ',portfolios)

    const fetchItems = async (portfolioId) => {
        try{
        const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
        console.log('PORTFOLIO ID PARAMETER ->',portfolioId)
        // const data = { portfolio_id: portfolioId };
        const response = await axios.post("http://127.0.0.1:8000/api/portfolios/items/",
            {
                action: "fetchPerformance",  // Specify the fetch action
                portfolio_id: portfolioId
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,  // Pass the JWT token in Authorization header
                    'Content-Type': 'application/json',
                },
            withCredentials: true,
            } );
        console.log('RESPONSE PERFORMANCE FOR PORTFOLIO - >',response)
        console.log('PERFORMANCE FOR PORTFOLIO - >',response.data)
        setPerformance(response.data);
        setSelectedPortfolio(portfolioId);
        } catch (error) {
            console.error("Error fetching portfolio items:", error);
        }
    };
    console.log('PERFORMANCE FOR PORTFOLIO 2 - >',performance.values)

    // Handle portfolio switching
    const onSwitchPortfolio = (portfolioId) => {
        // alert('SWITCHING to '+portfolioId)
        fetchItems(portfolioId); // Fetch items for the new portfolio
    };

    const options = stockData.stocks.map((stock) => ({
        value: stock.symbol,
        label: `${stock.name} (${stock.symbol})`,
    }));

    // console.log('TOKEN-->',localStorage.getItem('authToken'))

    const downloadCSV = (data_as_list_of_dict) => {
        if (!data_as_list_of_dict.length) return;

        // Get column headers from the keys of the first transaction
        const headers = Object.keys(data_as_list_of_dict[0]);

        // Generate CSV rows
        const csvRows = [
            headers.join(","), // Header row
            ...data_as_list_of_dict.map((txn) =>
                headers.map((key) => `"${txn[key]}"`).join(",")
            ), // Data rows
        ];

        // Convert to CSV string
        const csvString = csvRows.join("\n");

        // Trigger CSV download
        const blob = new Blob([csvString], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "positions.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        localStorage.getItem('authToken') ?
        <div className="portfolio-manager">
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
                </div>
            <div>
            <h5> View Portfolio Evolution </h5>
             <DynamicStockCharts graphdata={performance.values}/>
            </div>
            <div>
                <h5> View Portfolio XIRR Evolution </h5>
             <DynamicStockCharts graphdata={performance.xirr}/>
             {/*<DynamicStockCharts stocks={['SBIN']}/>*/}
            </div>
        </div>
            :
            <Navigate to="/login"/>
    );
};

export default PortfolioPerformance;
