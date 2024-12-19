import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import stockData from "../../resources/stocklist.json";
import Select from "react-select";
import {Navigate} from "react-router-dom";
import {verticalPadding} from "plotly.js/src/traces/parcoords/constants";
import {Pie} from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);


const PortfolioComposition = ({portfolioID}) => {
    const [items, setItems] = useState([]);

    const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage

    console.log('PORTCOMP -> PORTFOLIO ID PARAMETER ->',portfolioID)
    useEffect(() => {
        fetchItems(portfolioID);
    }, [portfolioID]);
    const fetchItems = async (portfolioId) => {
        try{
        const token = localStorage.getItem('authToken'); // Assuming you store token in localStorage
        console.log('PORTCOMP -> PORTFOLIO ID  ->',portfolioId)

        const data = {
            action: "fetchP_C",
            portfolio_id: portfolioID,
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
        console.log('PORTCOMP -> ITEMS FOR PORTFOLIO - >',response.data)
        setItems(response.data);
        } catch (error) {
            console.error("PORTCOMP -> Error fetching portfolio items:", error);
        }
    };

    // Function to generate dynamic colors
    const generateColors = (count) => {
        const colors = [];
        for (let i = 0; i < count; i++) {
            // Generate random RGB color
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            colors.push(`rgb(${r},${g},${b})`);
        }
        return colors;
    };

    // Generate colors based on the number of data points
    const backgroundColors = generateColors(items.length);
    const hoverColors = backgroundColors.map((color) =>
        color.replace("rgb", "rgba").replace(")", ",0.8)")
    );

    const chartData = {
        labels: items.map((d) => `${d.industry} (${d.sub_industry})`),
        // labels: items.map((d) => `(${d.industry})`),
        // datasets: [{ data: items.map((d) => d.value), backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }],
        datasets: [{ label: "Portfolio Composition",
                data: items.map((d) => d.cmv),
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverColors}]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top", // Change to "right" if needed
                labels: {
                    boxWidth: 10, // Smaller color boxes
                    font: {
                        size: 8, // Smaller font size for labels
                    },
                    padding: 10, // Spacing between labels
                },
            },
        },
    };


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
            <div>
            <h5 style={{margin: "10px"}}> Portfolio Composition
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

            <table className="portfolio-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Current Value</th>
                        <th>Country</th>
                        <th>Industry</th>
                        <th>Sub Industry</th>
                        <th>Investment</th>
                        <th>Profit/Loss</th>
                        {/*<th>Actions</th>*/}
                    </tr>
                </thead>
                <tbody>
                    {/* Portfolio Items */}
                    {items.map((item) => (
                        <tr key={item.name}>
                            <td>{item.item_type}</td>
                            <td>{item.name}</td>
                            <td>{Math.round(item.quantity,2)}</td>
                            <td>{Math.round(item.cmv,2)}</td>
                            <td>{item.country}</td>
                            <td>{item.industry}</td>
                            <td>{item.sub_industry}</td>
                            <td>{Math.round(item.investment,2)}</td>
                            <td>{Math.round(item.pnl,2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "500px", // Increased width for chart container
                    height: "450px", // Increased height for chart container
                    margin: "0 auto",
                }}
            >
            <Pie data={chartData} options={options}/>
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
export default PortfolioComposition;
