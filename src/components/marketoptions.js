import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import {fetchMarketOptions} from "../api";


// Approximation of the error function (erf)
function erf(x) {
  const sign = x >= 0 ? 1 : -1;
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;

  const absX = Math.abs(x);
  const t = 1.0 / (1.0 + p * absX);
  const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);

  return sign * y;
}

// Cumulative normal distribution function using erf approximation
function cumulativeNormalDistribution(x) {
  return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

// Probability density function for normal distribution
function normalPDF(x) {
  return (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);
}


// Black-Scholes formula for call and put options
const blackScholes = (S, K, T, r, sigma, optionType,metric) => {
  const d1 = (Math.log(S / K) + (r + (sigma ** 2) / 2) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  // const N = (x) => (1.0 + Math.erf(x / Math.sqrt(2))) / 2; // Approximation for the cumulative normal distribution
  const N = (x) => cumulativeNormalDistribution(x);
  const N_ = (x) => normalPDF(x);

  if (optionType === "call") {
    if (metric === "price") {
        // console.log(optionType,metric)
        return S * N(d1) - K * Math.exp(-r * T) * N(d2);
    }
    if (metric === "delta") {return N(d1);}
    if (metric === "gamma") {return N_(d1)/(S * sigma * Math.sqrt(T));}
    if (metric === "vega") {return S * N_(d1) * Math.sqrt(T);}
    if (metric === "theta"){ return -S * N_(d1) * sigma/(2 * Math.sqrt(T)) - r * K * Math.exp(-r * T) * N(d2);}
    if (metric === "rho") {return K * T * Math.exp(-r * T) * N(d2);}
  }
  else if (optionType === "put") {
                      // console.log(optionType,metric)
    if (metric === "price") {
                // console.log(optionType,metric)

        return K * Math.exp(-r * T) * N(-d2) - S * N(-d1);
    }
    if (metric === "delta") {return N(d1) - 1;}
    if (metric === "gamma") {return N_(d1)/(S * sigma * Math.sqrt(T));}
    if (metric === "vega") {return S * N_(d1) * Math.sqrt(T);}
    if (metric === "theta") {return -S * N_(d1) * sigma/(2 * Math.sqrt(T)) + r * K * Math.exp(-r * T) * N(-d2);}
    if (metric === "rho") {return -K * T * Math.exp(-r * T) * N(-d2);}
  }
  return 0;
};

const MarketOption = ({symbol}) => {

  const [strikeRange, setStrikeRange] = useState([0,120]);
  const [expiryRange, setExpiryRange] = useState([]);
  const [spotRange, setSpotRange] = useState([100]);
  const [loaded, setLoaded] = useState(false);

  // const strikeRange = null;
  // const expiryRange = null;
  // const spotRange = null;

  const [metric, setMetric] = useState('price');  // Selected metric
  const [spotPrice, setSpotPrice] = useState(100); // Initial spot price

  const [strikePrice, setStrikePrice] = useState(100);

  const [volatility, setVolatility] = useState(0.2); // 20% volatility
  const [timeToMaturity, setTimeToMaturity] = useState(1); // 1 year

  const [riskFreeRate, setRiskFreeRate] = useState(0.05); // 5% risk-free rate
  const [isModalOpen, setIsModalOpen] = useState(false);




  // Calculate payoffs
  const calculatePayoff = () => {
    const prices = [];
    const callPayoffs = [];
    const putPayoffs = [];

    // Calculate payoffs for a range of spot prices
    for (let S = 0.9*spotRange; S <= 1.1*spotRange; S += 1) {
      prices.push(S);
      callPayoffs.push(blackScholes(S, strikePrice, timeToMaturity, riskFreeRate, volatility, "call",metric));
      putPayoffs.push(blackScholes(S, strikePrice, timeToMaturity, riskFreeRate, volatility, "put",metric));
    }
    return { prices, callPayoffs, putPayoffs };
  };

  const [payoffs, setPayoffs] = useState(calculatePayoff());
  const currentCallValue = blackScholes(spotPrice, strikePrice, timeToMaturity, riskFreeRate, volatility, "call",metric);
  const currentPutValue = blackScholes(spotPrice, strikePrice, timeToMaturity, riskFreeRate, volatility, "put",metric);


  useEffect(() => {
  if (!loaded) {
  fetchMarketOptions(symbol)
      .then(data => {
        const optionDetails = JSON.parse(data);
        setStrikeRange(optionDetails.strikes);
        setExpiryRange(optionDetails.expiry);
        setSpotRange(optionDetails.spot.lastPrice);
        console.log("Spot",spotRange)
        console.log("expiry",expiryRange)
      });
      setLoaded(true);}
    // Update payoffs when spot price changes
    setPayoffs(calculatePayoff());
  }, [spotPrice, strikePrice, volatility, timeToMaturity, riskFreeRate,metric]);

  console.log("expiry",expiryRange)
  console.log("SPOT",symbol,spotRange)
  console.log("Payoffs",symbol,payoffs)


  const currentDate = new Date();
  const ttm = [];
  for (let i =0; i < expiryRange.length;i++){
      ttm.push(Math.abs(new Date(expiryRange[i]) - currentDate)/(1000 * 60 * 60 * 24*365));
  }
  console.log("TTM",ttm)

  // Handle input box change
  const handleInputChange = (foo,e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      // setSpotPrice(value);
        foo.apply(this,value);
    }
  };




  // State for crosshair line positions
  const [crosshair, setCrosshair] = useState({ x: spotPrice, y: currentCallValue });

  // Update crosshair position on mouse move
  const handleMouseMove = (event) => {
    if (event.points) {
      const { x, y } = event.points[0];
      setCrosshair({ x, y });
    }
  };

  const handleChartClick = () => {
    setIsModalOpen(true); // Opens the modal when the chart is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Closes the modal
  };

  const renderChart = (width, height) => (
    <Plot
      data={[
        {
          x: payoffs.prices,
          y: payoffs.callPayoffs,
          type: "scatter",
          mode: "lines",
          name: "Call Option Payoff ",
          line: { color: "blue" },
        },
        {
          x: payoffs.prices,
          y: payoffs.putPayoffs,
          type: "scatter",
          mode: "lines",
          name: "Put Option Payoff ",
          line: { color: "red" },
        },
        {
          x: [spotPrice],
          y: [currentCallValue],
          type: "scatter",
          mode: "markers+ text",
          name: "Current Call Value",
          text: [`${currentCallValue.toFixed(2)}`],
            textposition: "top center",

          marker: { color: "blue", size: 10},
        },
        {
          x: [spotPrice],
          y: [currentPutValue],
          type: "scatter",
          mode: "markers+ text",
          name: "Current Put Value",
          text: [`${currentPutValue.toFixed(2)}`],
                      textposition: "top center",
          marker: { color: "red", size: 10},

        },
      ]}
      layout={{
        width: width,
        height: height,
        title: "Option Payoff (".concat(metric.toLocaleUpperCase()).concat(")"),
        xaxis: { title: "Spot Price" },
        yaxis: { title: "Option Payoff" },
        annotations: [
            {
              x: spotPrice,
              y: currentCallValue,
              xref: "x",
              yref: "y",
              text: `Call: ${currentCallValue.toFixed(2)} Spot: ${spotPrice.toFixed(2)}`,
              showarrow: true,
              arrowhead: {size: 7, color: "blue" },
              ax: 0,
              ay: -40,
              font: { color: "blue" },
            },
            {
              x: spotPrice,
              y: currentPutValue,
              xref: "x",
              yref: "y",
              text: `Put: ${currentPutValue.toFixed(2)}  Spot: ${spotPrice.toFixed(2)}`,
              showarrow: true,
              arrowhead: {size: 7, color: "red" },
              ax: 0,
              ay: -40,
              font: { color: "red" },
            },
          ],
      }}
      onClick={handleChartClick}
    />
  );

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <h2 style={{paddingTop: "10px"}}>Option Payoff Calculator</h2>

      <div >
      <table width="100%" >
      <tr><td width="30%" align="right" >
      <label>Spot Price:</label>
      {/*</td>*/}
      {/*<td width="100" align="left" bgcolor="#8a2be2">*/}
              <input
          type="number"
          value={Math.round(spotPrice*100)/100}
            min={0.5*spotRange}
            max={1.5*spotRange}
          // onChange={handleInputChange(setSpotPrice)}
          onChange={(e) => setSpotPrice(Number(e.target.value))}
          style={{ width: '80px', marginLeft: '10px' }}
        />
      </td>
      <td width="70%" align="left">
      <input
        type="range"
        // min="50"
        // max="150"
        min={0.5*spotRange}
        max={1.5*spotRange}
        value={spotPrice}
        onChange={(e) => setSpotPrice(Number(e.target.value))}

        style={{ width: "80%" ,margin:"10px"}}
      />
      </td> </tr>
      <tr><td width="30%" align="right">
      <label>Strike Price:</label>
     {/*</td>*/}
     {/*      <td width="10%" align="left">*/}
              <input
          type="number"
          value={strikePrice}
                  min={strikeRange != null ? strikeRange[0] : 10}
        max={strikeRange != null ? strikeRange[strikeRange.length -1] : 150}
          // onChange={handleInputChange}
        onChange={(e) => setStrikePrice(Number(e.target.value))}

          style={{ width: '80px', marginLeft: '10px' }}
        />
      </td>
     <td width="70%"  align="left">
      <input
        type="range"
        min={strikeRange != null ? strikeRange[0] : 10}
        max={strikeRange != null ? strikeRange[strikeRange.length -1] : 150}
        value={strikePrice}
        onChange={(e) => setStrikePrice(Number(e.target.value))}

        style={{ width: "80%" ,margin:"10px"}}
      />
      </td> </tr>
      <tr><td width="30%" align="right">
      <label>Volatility: {Number(Math.round(volatility*100)/100).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:0})}</label>
     {/*</td>*/}
     {/*           <td width="10%" align="left">*/}
              <input
          type="number"
          value={volatility}
                  min="0"
        max="3"
                  step="0.0001"
          // onChange={handleInputChange}
        onChange={(e) => setVolatility(Number(e.target.value))}

          style={{ width: '80px', marginLeft: '10px' }}
        />
      </td>
      <td width="70%"  align="left">
      <input
        type="range"
        min="0"
        max="3"
        step="0.0001"
        value={volatility}
        onChange={(e) => setVolatility(Number(e.target.value))}

        style={{ width: "80%" ,margin:"10px"}}
      />
      </td> </tr>
      <tr><td width="30%" align="right">
      <label>TTM (Yrs):</label>
     {/*</td>*/}
     {/*           <td width="10%" align="left">*/}
              <input
          type="number"
          value={Math.round(timeToMaturity*100)/100}
        min="0"
        max={ttm[ttm.length -1]}
        step={1/365}
          // onChange={handleInputChange}
        onChange={(e) => setTimeToMaturity(Number(e.target.value))}

          style={{ width: '80px', marginLeft: '10px' }}
        />
      </td>
          <td width="70%"  align="left">
      <input
        type="range"
        min="0"
        max={ttm[ttm.length -1]}
        step={1/365}
        value={timeToMaturity}
        onChange={(e) => setTimeToMaturity(Number(e.target.value))}

        style={{ width: "80%" ,margin:"10px"}}
      />
      </td> </tr>
          <tr>
              <td width="10%" align="right">
      <label>Metric</label>
     </td><td width="90%"  align="left">
               {/* Radio buttons for metric selection */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        {['price','delta', 'gamma', 'vega', 'theta', 'rho'].map((m) => (
          <label key={m} style={{ margin: '0 10px' }}>
            <input
              type="radio"
              value={m}
              checked={metric === m}
              onChange={(e) => setMetric(e.target.value)}
              style={{ margin: '0 5px' }}
            />
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </label>
        ))}
      </div>
          </td>   </tr>
      </table>
    </div>

      {renderChart(800, 400)} {/* Default chart */}

      {/* Modal for enlarged chart */}
      {isModalOpen && (
        <div style={modalStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <span style={closeButtonStyle} onClick={closeModal}>
              &times;
            </span>
            {renderChart(1200, 800)} {/* Enlarged chart */}
          </div>
        </div>
      )}

    </div>
  );
};

// Modal CSS styles
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  position: "relative",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "24px",
  cursor: "pointer",
};

export default MarketOption;
