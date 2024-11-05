// PayoffChart.js
import React from 'react';
import Plot from 'react-plotly.js';
import { calculatePayoff} from "./optionCalculation";

function PayoffChart({ strategy, strikePrice, premium }) {
    const stockPrices = Array.from({ length: 100 }, (_, i) => i + 1);
    const payoffData = stockPrices.map(price => calculatePayoff(strategy, strikePrice, premium, price));

    return (
        <Plot
            data={[
                {
                    x: stockPrices,
                    y: payoffData,
                    type: 'scatter',
                    mode: 'lines',
                    marker: { color: 'blue' },
                },
            ]}
            layout={{
                title: `${strategy} Payoff`,
                xaxis: { title: 'Stock Price' },
                yaxis: { title: 'Payoff' },
            }}
        />
    );
}

export default PayoffChart;
