import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select"; // Install this library using: npm install react-select
import "./PortfolioManager.css";
import {Navigate} from "react-router-dom";
import stockData from '../../resources/stocklist.json';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import TransactionsTable from "./transactions_table";

const formatDate = (date) => {
    if (!date) return null;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
};

const PortfolioMaintenance = (portfolioId) => {
    const [portfolios, setPortfolios] = useState([]);
    const [portfolioName, setPortfolioName] = useState("");
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ item_type: "Stock", name: "", transaction:"BUY",quantity: 0, purchase_price: 0 });
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [searchText, setSearchText] = useState("");

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
    const createPortfolio = async () => {
        const portfolioName = prompt('Enter the new portfolio name');
        if (portfolioName) {
            const response = await axios.post("http://127.0.0.1:8000/api/portfolios/",
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
        const formattedFromDate = fromDate ? formatDate(fromDate) : null;
        const formattedToDate = toDate ? formatDate(toDate) : null;
        console.log(selectedPortfolio,fromDate,formattedFromDate,toDate,formattedToDate,searchText);

        const data = {
            action: "fetchT",
            portfolio_id: selectedPortfolio,
            from_date: formattedFromDate,
            to_date: formattedToDate,
            search_text: searchText
            };
        // const data = { portfolio_id: portfolioId };
        const response = await axios.post("http://127.0.0.1:8000/api/portfolios/items/",
            data,
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
        const response = await axios.post("http://127.0.0.1:8000/api/portfolios/items/",
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
        await axios.delete("http://127.0.0.1:8000/api/portfolios/", { data: { portfolio_id: portfolioId } ,
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
        await axios.delete("http://127.0.0.1:8000/api/portfolios/items/", { data: { item_name: itemId,portfolio_id: selectedPortfolio }  ,
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
        setSelectedPortfolio(portfolioId);
        // fetchItems(portfolioId); // Fetch items for the new portfolio
    };

    const options = stockData.stocks.map((stock) => ({
        value: stock.symbol,
        label: `${stock.name} (${stock.symbol})`,
    }));

    const handleItemNameChange = (selectedOption) => {
        setSelectedName(selectedOption); // Update search box state
        setNewItem({ ...newItem, name: selectedOption.value });    };

    // console.log('TOKEN-->',localStorage.getItem('authToken'))
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
                <button className="create-portfolio-btn" onClick={createPortfolio}>
                    Create Portfolio
                </button>
            </div>

            <TransactionsTable portfolioID={selectedPortfolio}/>
        </div>
            :
            // <LoginPage/>
            <Navigate to="/login"/>
    );
};

export default PortfolioMaintenance;
