import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select"; // Install this library using: npm install react-select
import "./PortfolioManager.css";
import {Navigate} from "react-router-dom";
import stockData from '../../resources/stocklist.json';
import settings from '../../resources/settings.json';

var url = settings.dev_server;
if (settings.environment === "production"){
    url = settings.prod_server;
}
const PortfolioDashBoard = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [portfolioName, setPortfolioName] = useState("");
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ item_type: "Stock", name: "", transaction:"BUY",quantity: 0, purchase_price: 0 });

    const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
    const [selectedName, setSelectedName] = useState(null); // State for the search box value

    useEffect(() => {
        fetchPortfolios();
    }, []);

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
    }
        } catch (error) {
        console.error("Error fetching portfolios:", error);
    }
    };
    console.log('REACT portfolio fetch ',portfolios)
    const createPortfolio = async () => {
        const portfolioName = prompt('Enter the new portfolio name');
        if (portfolioName) {
            const response = await axios.post(`${url}/api/portfolios/`,
                {name: portfolioName},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,  // Pass the JWT token in Authorization header
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                });
            console.log('Portfolio created:', response.data);
            setPortfolios([...portfolios, response.data]);
            setPortfolioName("");
        }
    };

    const fetchItems = async (portfolioId) => {
        try{
        const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
        console.log('PORTFOLIO ID PARAMETER ->',portfolioId)
        // const data = { portfolio_id: portfolioId };
        const response = await axios.post(`${url}/api/portfolios/items/`,
            {
                action: "fetchP",  // Specify the fetch action
                portfolio_id: portfolioId
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,  // Pass the JWT token in Authorization header
                    'Content-Type': 'application/json',
                },
            withCredentials: true,
            } );
        console.log('ITEMS FOR PORTFOLIO - >',response.data)
        setItems(response.data);
        setSelectedPortfolio(portfolioId);
        } catch (error) {
            console.error("Error fetching portfolio items:", error);
        }
    };

    const addItem = async () => {

        const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
        console.log(selectedPortfolio,newItem.item_type,newItem.name,newItem.transaction,newItem.quantity,newItem.purchase_price)
        const data = {
            action: "add",
            portfolio_id: selectedPortfolio,
            item_type: newItem.item_type,
            name: newItem.name,
            transaction: newItem.transaction,
            quantity: newItem.quantity,
            purchase_price: newItem.purchase_price
            };

       try{
        const response = await axios.post(`${url}/api/portfolios/items/`,
            data,{
            headers: {
                    Authorization: `Bearer ${token}`,  // Pass the JWT token in Authorization header
                    'Content-Type': 'application/json',
                },
                withCredentials: true });
        // setItems([...items, response.data]);

        // Add the newly created item to the items list
        setItems((prevItems) => {
            // Check and log current items for debugging
            console.log("Previous items:", prevItems);
            return [...prevItems, response.data];
        });

        console.log('AFTER ADDING -->',response.data);
        // Clear input fields
        setNewItem({ item_type: "Stock", name: "", transaction:"BUY",quantity: 0, purchase_price: 0 });
        setSelectedName(null); // Reset the search box

        fetchItems(selectedPortfolio);
        } catch (error) {
        console.error("Error fetching portfolio items:", error);
    }
    };

    const deletePortfolio = async (portfolioId) => {
        await axios.delete(`${url}/api/portfolios/`,
            { data: { portfolio_id: portfolioId } ,
            headers: {
                    Authorization: `Bearer ${token}`,  // Pass the JWT token in Authorization header
                    'Content-Type': 'application/json',
                },
            withCredentials: true  });
        setPortfolios(portfolios.filter((portfolio) => portfolio.id !== portfolioId));
        if (portfolioId === selectedPortfolio) {
            setSelectedPortfolio(null);
            setItems([]);
        }
    };

    const deleteItem = async (itemId) => {
        await axios.delete(`${url}/api/portfolios/items/`,
            { data: { item_name: itemId,portfolio_id: selectedPortfolio }  ,
            headers: {
                    Authorization: `Bearer ${token}`,  // Pass the JWT token in Authorization header
                    'Content-Type': 'application/json',
                },
            withCredentials: true });
        setItems(items.filter((item) => item.name !== itemId));
    };

    // Handle portfolio switching
    const onSwitchPortfolio = (portfolioId) => {
        // alert('SWITCHING to '+portfolioId)
        fetchItems(portfolioId); // Fetch items for the new portfolio
    };

    const options = stockData.stocks.map((stock) => ({
        value: stock.symbol,
        label: `${stock.name} (${stock.symbol})`,
    }));

    const handleItemNameChange = (selectedOption) => {
        setSelectedName(selectedOption); // Update search box state
        setNewItem({ ...newItem, name: selectedOption.value });    };

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
            <h5> View Positions
            {/* CSV Download Button with Icon */}
            { (items && items.length) > 0 ?
            <a href="#">
            <img
                src="https://img.icons8.com/?size=100&id=107445&format=png&color=000000" // Replace with your desired Excel/CSV icon URL
                alt="Download CSV"
                width="20" height="20"
                className="csv-icon"
                onClick={(e) => downloadCSV(items)}
                title="Download Positions as CSV"
            />
            </a> : ""
            }
            </h5>
            <table className="portfolio-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Avg Price</th>
                        <th>Current Price</th>
                        <th>Investment</th>
                        <th>Profit/Loss</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Portfolio Items */}
                    {items.map((item) => (
                        <tr key={item.name}>
                            <td>{item.item_type}</td>
                            <td>{item.name}</td>
                            <td>{Math.round(item.quantity,2)}</td>
                            <td>{Math.round(item.avg_price,2)}</td>
                            <td>{Math.round(item.cmp,2)}</td>
                            <td>{Math.round(item.investment,2)}</td>
                            <td>{Math.round(item.pnl,2)}</td>
                            <td>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                                    alt="Delete"
                                    className="delete-icon"
                                    onClick={() => deleteItem(item.name)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            :
            <Navigate to="/login"/>
    );
};

export default PortfolioDashBoard;
