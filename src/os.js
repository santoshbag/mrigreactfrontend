// App.js
import React, { useState } from 'react';

// import { stockOptions, strategyOptions } from './options';
import Dropdown from "./components/dropdown";
import OptionInputs from "./components/optionInput";
import PayoffChart from "./components/payoffchart";

function OS() {
    const [selectedStock, setSelectedStock] = useState(null);
    const [selectedStrategy, setSelectedStrategy] = useState(null);
    const [strikePrice, setStrikePrice] = useState(100);
    const [premium, setPremium] = useState(5);
    const [expiration, setExpiration] = useState(30);

    const strategies = [
  "Long Call", "Short Call", "Long Put", "Short Put", "Covered Call",
  "Protective Put", "Straddle", "Strangle", "Iron Condor", "Butterfly Spread"
];

// options.js
    const stockOptions = [
        { value: 'AAPL', label: 'Apple (AAPL)' },
        { value: 'GOOGL', label: 'Google (GOOGL)' },
        { value: 'AMZN', label: 'Amazon (AMZN)' },
        { value: 'TSLA', label: 'Tesla (TSLA)' },
        // Add more stocks as needed
    ];

    const strategyOptions = [
        { value: 'longCall', label: 'Long Call' },
        { value: 'shortCall', label: 'Short Call' },
        { value: 'longPut', label: 'Long Put' },
        { value: 'shortPut', label: 'Short Put' },
        { value: 'coveredCall', label: 'Covered Call' },
        { value: 'protectivePut', label: 'Protective Put' },
        { value: 'straddle', label: 'Straddle' },
        { value: 'strangle', label: 'Strangle' },
        { value: 'ironCondor', label: 'Iron Condor' },
        { value: 'butterflySpread', label: 'Butterfly Spread' },
        // Add more strategies as needed
    ];


    return (
        <div>
            <h1>Options Strategy Payoff Calculator</h1>
            <div>
                <h2>Select Stock</h2>
                <Dropdown
                    options={stockOptions}
                    onChange={(option) => setSelectedStock(option)}
                    value={selectedStock}
                    placeholder="Select a stock"
                />
            </div>
            <div>
                <h2>Select Strategy</h2>
                <Dropdown
                    options={strategyOptions}
                    onChange={(option) => setSelectedStrategy(option.value)}
                    value={strategyOptions.find(option => option.value === selectedStrategy)}
                    placeholder="Select an option strategy"
                />
            </div>
            <OptionInputs
                strikePrice={strikePrice}
                setStrikePrice={setStrikePrice}
                premium={premium}
                setPremium={setPremium}
                expiration={expiration}
                setExpiration={setExpiration}
            />
            <div style={{ marginTop: '20px' }}>
                {selectedStrategy && (
                    <PayoffChart
                        strategy={selectedStrategy}
                        strikePrice={strikePrice}
                        premium={premium}
                    />
                )}
            </div>
        </div>
    );
}

export default OS;
