// optionCalculations.js
export function calculatePayoff(strategy, strikePrice, premium, stockPrice) {
    switch (strategy) {
        case "longCall":
            return Math.max(stockPrice - strikePrice, 0) - premium;
        case "shortCall":
            return Math.min(strikePrice - stockPrice, 0) + premium;
        case "longPut":
            return Math.max(strikePrice - stockPrice, 0) - premium;
        case "shortPut":
            return Math.min(stockPrice - strikePrice, 0) + premium;
        // Add cases for other strategies as needed
        default:
            return 0;
    }
}
