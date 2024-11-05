import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StockSearch.css';
import stockData from './../resources/stocklist.json';
const StockSearch = () => {
  const [stocks, setStocks] = useState([]);

   useEffect(() => {
        setStocks(stockData.stocks);
    }, []);

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Filter stocks by name based on the input
    if (value.length > 0) {
      const filteredStocks = stocks.filter(stock =>
        stock.name.toLowerCase().includes(value.toLowerCase()) || stock.symbol.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredStocks);
    } else {
      setSuggestions([]);
    }
  };

  const handleStockSelect = (isin,type) => {
    // Navigate to the stock-specific page
    type === 'stock' ? navigate(`/stock/${isin}`) : navigate(`/mf/${isin}`);
  };

  return (
    <div className="stock-search">
      <input
        type="text"
        placeholder="Search for a stock/MF..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />

      {/* Show suggestions if there are any */}
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((stock, index) => (
            <li key={index} onClick={() => handleStockSelect(stock.isin,stock.type)}>
              {stock.name} ({stock.symbol})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockSearch;
