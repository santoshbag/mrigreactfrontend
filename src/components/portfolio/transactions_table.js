import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import stockData from "../../resources/stocklist.json";
import Select from "react-select";
import {Navigate} from "react-router-dom";
import {verticalPadding} from "plotly.js/src/traces/parcoords/constants";
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
const TransactionsTable = ({portfolioID}) => {
    const [portfolios, setPortfolios] = useState([]);
    const [portfolioName, setPortfolioName] = useState("");
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ item_type: "Stock", name: "", transaction:"BUY",quantity: 0, purchase_price: 0,tran_date: null });
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [tranDate, setTranDate] = useState(null);


    // Set default dates
    const defaultFromDate = new Date();
    defaultFromDate.setDate(defaultFromDate.getDate() - 30); // 30 days ago
    const defaultToDate = new Date();

    // Format date as yyyy-mm-dd
    // const formatDate = (date) => date.toISOString().split("T")[0];
    //
    // // State variables
    // const [searchText, setSearchText] = useState("");
    // const [fromDate, setFromDate] = useState(formatDate(defaultFromDate));
    // const [toDate, setToDate] = useState(formatDate(defaultToDate));

    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [searchText, setSearchText] = useState("");

    const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
    const [selectedName, setSelectedName] = useState(null); // State for the search box value

    console.log('TT -> PORTFOLIO ID PARAMETER ->',portfolioID)

    useEffect(() => {
        fetchItems(portfolioID);
        setSearchText(""); // Clear the search field
        setFromDate(null); // Clear the 'from' date picker
        setToDate(null); // Clear the 'to' date picker
    }, [portfolioID]);

    const fetchItems = async (portfolioId) => {
        try{
        const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
        console.log('TT -> PORTFOLIO ID  ->',portfolioId)
        const formattedFromDate = fromDate ? formatDate(fromDate) : null;
        const formattedToDate = toDate ? formatDate(toDate) : null;
        console.log('TT ->',selectedPortfolio,fromDate,formattedFromDate,toDate,formattedToDate,searchText);

        const data = {
            action: "fetchT",
            portfolio_id: portfolioID,
            from_date: formattedFromDate,
            to_date: formattedToDate,
            search_text: searchText
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
        console.log('TT -> ITEMS FOR PORTFOLIO - >',response.data)
        setItems(response.data);
        setSelectedPortfolio(portfolioId);
        setSearchText(""); // Clear the search field
        setFromDate(null); // Clear the 'from' date picker
        setToDate(null); // Clear the 'to' date picker
        } catch (error) {
            console.error("TT -> Error fetching portfolio items:", error);
        }
    };

    const addItem = async () => {

        const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
        console.log(selectedPortfolio,newItem.item_type,newItem.name,newItem.transaction,newItem.quantity,newItem.purchase_price,newItem.tran_date)
        const data = {
            action: "add",
            portfolio_id: portfolioID,
            item_type: newItem.item_type,
            name: newItem.name,
            transaction: newItem.transaction,
            quantity: newItem.quantity,
            purchase_price: newItem.purchase_price,
            transaction_date : newItem.tran_date
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
            console.log("TT -> Previous items:", prevItems);
            return [...prevItems, response.data];
        });

        console.log('TT -> AFTER ADDING -->',response.data);
        // Clear input fields
        setNewItem({ item_type: "Stock", name: "", transaction:"BUY",quantity: 0, purchase_price: 0 });
        setSelectedName(null); // Reset the search box

        fetchItems(selectedPortfolio);
        } catch (error) {
        console.error("TT -> Error fetching portfolio items:", error);
    }
    };

    // Handle portfolio switching

    const options = stockData.stocks.map((stock) => ({
        value: stock.symbol,
        label: `${stock.name} (${stock.symbol})`,
    }));

    const handleItemNameChange = (selectedOption) => {
        setSelectedName(selectedOption); // Update search box state
        setNewItem({ ...newItem, name: selectedOption.value });    };

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
        link.download = "transactions.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        localStorage.getItem('authToken') ?
        <div>
            <h5> Add a Trade/Transaction</h5>
            <table className="portfolio-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Transaction</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add Item Row */}
                    <tr className="add-item-row">
                        <td>
                            <select
                                 value={newItem.item_type || "Stock"} // Default to "Stock"
                                onChange={(e) =>
                                    setNewItem({ ...newItem, item_type: e.target.value })
                                }
                            >
                                <option value="Stock">Stock</option>
                                <option value="Mutual_Fund">Mutual Fund</option>
                            </select>
                        </td>
                        <td>
                            {/*<input*/}
                            {/*    type="text"*/}
                            {/*    placeholder="Item Name"*/}
                            {/*    value={newItem.name}*/}
                            {/*    onChange={(e) =>*/}
                            {/*        setNewItem({ ...newItem, name: e.target.value })*/}
                            {/*    }*/}
                            {/*/>*/}
                            <Select
                                value={selectedName} // Bind to selectedName state
                                options={options}
                                onChange={handleItemNameChange}
                                placeholder="Search item..."
                            />
                        </td>
                        <td>
                            <select
                                 value={newItem.transaction || "BUY"} // Default to "Stock"
                                onChange={(e) =>
                                    setNewItem({ ...newItem, transaction: e.target.value })
                                }
                            >
                                <option value="BUY">Buy</option>
                                <option value="SELL">Sell</option>
                            </select>
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Quantity"
                                value={newItem.quantity}
                                onChange={(e) =>
                                    setNewItem({ ...newItem, quantity: e.target.value })
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Buy Price"
                                value={newItem.purchase_price}
                                onChange={(e) =>
                                    setNewItem({ ...newItem, purchase_price: e.target.value })
                                }
                            />
                        </td>
                        <td width="15%">
                        {/*<div className="filters-container">*/}
                            <div className="filter-item">
                                {/*<label>From Date:</label>*/}
                                <DatePicker
                                    selected={newItem.tran_date}
                                    onChange={(date) => setNewItem({ ...newItem, tran_date: date })}
                                    dateFormat="yyyy-MM-dd"
                                    isClearable
                                />
                            </div>
                        </td>
                        <td>
                            <button className="add-button" onClick={addItem}>
                                Add
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
            <h5 style={{margin: "10px"}}> Transaction History
            {/* CSV Download Button with Icon */}
            { (items && items.length) > 0 ?
            <a href="#">
            <img
                src="https://img.icons8.com/?size=100&id=107445&format=png&color=000000" // Replace with your desired Excel/CSV icon URL
                alt="Download CSV"
                width="20" height="20"
                className="csv-icon"
                onClick={(e) => downloadCSV(items)}
                title="Download Transactions as CSV"
            />
            </a> : ""

            }
            </h5>
            {/*<style>{cssStyles}</style> /!* Inline CSS *!/*/}
            <table style={{margin : "20px"}}>
            <tr>
            <td width="25%">
            {/*<div className="filters-container">*/}
                <div className="filter-item">
                    <label>From Date:</label>
                    <DatePicker
                        selected={fromDate}
                        onChange={(date) => setFromDate(date)}
                        dateFormat="yyyy-MM-dd"
                        isClearable
                    />
                </div>
            </td>
                <td width="25%">
                <div className="filter-item">
                    <label>To Date:</label>
                    <DatePicker
                        selected={toDate}
                        onChange={(date) => setToDate(date)}
                        dateFormat="yyyy-MM-dd"
                        isClearable
                    />
                </div>
                </td>
                <td width="30%">
                <div className="filter-item">
                    <label>Search:</label>
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Symbol or Type"
                    />
                </div>
                </td>
                <td width="20%">
                <div className="filter-item">
                    <label></label>
                    <button onClick={(e) => fetchItems(portfolioID)}>View</button>
                </div>
                </td>
            </tr>
            </table>
            {/*</div>*/}

            { (items && items.length) > 0 ?
            <table className="portfolio-table">
                <thead>
                    <tr>
                        <th>Tran ID</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Tran Type</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Tran Date</th>
                        {/*<th>Actions</th>*/}
                    </tr>
                </thead>
                <tbody>
                    {/* Portfolio Items */}
                    {items.map((item) => (
                        <tr key={item.tran_id}>
                            <td>{item.tran_id}</td>
                            <td>{item.type}</td>
                            <td>{item.name}</td>
                            <td>{item.tran_type}</td>
                            <td>{Math.round(item.quantity,2)}</td>
                            <td>{Math.round(item.price,2)}</td>
                            <td>{item.tran_date}</td>
                            {/*<td>*/}
                            {/*    <img*/}
                            {/*        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"*/}
                            {/*        alt="Delete"*/}
                            {/*        className="delete-icon"*/}
                            {/*        onClick={() => deleteItem(item.name)}*/}
                            {/*    />*/}
                            {/*</td>*/}
                        </tr>
                    ))}
                </tbody>
            </table>
            : ""
            }
        </div>
        </div>
            :
            // <LoginPage/>
            <Navigate to="/login"/>
    );
};

// Inline CSS
const cssStyles = `
.filters-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
}

.filter-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.filter-item label {
    font-weight: bold;
    margin-bottom: 5px;
}

.filter-item input,
.filter-item button,
.filter-item .react-datepicker-wrapper {
    width: 200px;
    padding: 5px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.filter-item button {
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.filter-item button:hover {
    background-color: #0056b3;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table th, table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

table th {
    background-color: #f4f4f4;
    font-weight: bold;
}

@media (max-width: 600px) {
    .filters-container {
        flex-direction: column;
        gap: 10px;
    }

    .filter-item input,
    .filter-item button,
    .filter-item .react-datepicker-wrapper {
        width: 100%;
    }
}
`;
export default TransactionsTable;
