import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import {fetchRates} from "../api";
import spotrateform from "./spotrateform";
import {useNavigate} from "react-router-dom";

const Rates = ({currency="INR",rateParams={}}) => {

  const [rates, setRates] = useState(false);
  const [tenors, setTenors] = useState(false);
  const [zeroes, setZeroes] = useState(false);
  const [forwards, setForwards] = useState(false);
  const [discounts, setDiscounts] = useState(false);

  const [loaded, setLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [params, setParams] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    szc_currency: 'INR',
    szc_daycount: 'Actual-360',
    szc_calendar: 'India',
    szc_compounding: 'Compounded',
    szc_interpolation: 'Linear',
    szc_parallelshift: 0,
    szc_frequency: 'Annual',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoaded(true)
    const params = {};
    params['currency'] = formData.szc_currency;
    params['day_count'] = formData.szc_daycount;
    params['calendar'] = formData.szc_calendar;
    params['interpolation'] = formData.szc_interpolation;
    params['compounding'] = formData.szc_compounding;
    params['compounding_frequency'] = formData.szc_frequency;
    params['shiftparameter'] = formData.szc_parallelshift;
    setParams(params);
    // navigate('/next-page', { state: { formData } }); // Pass formData via navigate state
  };


  useEffect(() => {
  if (!loaded) {
  fetchRates(formData.szc_currency,params)
      .then(data => {
        const rates = JSON.parse(data);
        setTenors(rates.tenors);
        setZeroes(rates.zeroes);
        setForwards(rates.forwards);
        setDiscounts(rates.discounts);
        // console.log("Tenors",tenors)
        // console.log("Zeroes",zeroes)
      });
      // setLoaded(true);
  }
    // Update payoffs when spot price changes
  }, [currency,params]);

    console.log("Tenors",tenors)
    console.log("Zeroes",zeroes)

    console.log("Forwards",forwards)
    console.log("Discounts",discounts)

  // State for crosshair line positions
  const [crosshair, setCrosshair] = useState({ x: tenors, y: zeroes });

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
          x: tenors,
          y: zeroes,
          type: "scatter",
          mode: "lines",
          name: "Spot Zero Rates ",
          line: { color: "blue" },
        },
        {
          x: tenors,
          y: discounts,
          type: "scatter",
          mode: "lines",
          yaxis: 'y2',
          name: "Discount Factors",
          line: { color: "red" },
        },
        {
          x: tenors,
          y: forwards,
          type: "scatter",
          mode: "lines",
          name: "Forward Rates ",
          line: { color: "green" },
        },

      ]}
      layout={{
        width: width,
        height: height,
        title: "Rate (".concat(formData.szc_currency.toLocaleUpperCase()).concat(")"),
        xaxis: { title: "Tenor" },
        yaxis: { title: "Rate" ,  range: [Math.min(zeroes),Math.max(zeroes)]},
        yaxis2: { title: "Discount Factor" ,side: "right", overlaying: 'y', rangemode: 'tozero'}

      }}
      onClick={handleChartClick}
    />
  );
  const spotRateForm = () => (
                <form className="stacked-form" onSubmit={handleSubmit} >

      <div className="form-row">
        <label>Currency</label>
        <select name="szc_currency" value={formData.szc_currency} onChange={handleChange}>
                                   <option value="INR">INR</option>
                                   <option value="USD">USD</option>
                                   <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="form-row">
        <label>Day Count</label>
        <select name="szc_daycount" value={formData.szc_daycount} onChange={handleChange}>
                                    <option value="Actual-360">Actual-360</option>
                                    <option value="Actual-365Fixed">Actual-365Fixed</option>
                                    <option value="Actual-365FixedNoLeap">Actual-365FixedNoLeap</option>
                                    <option value="Actual-Actual">Actual-Actual</option>
                                    <option value="30-360">30-360</option>
        </select>
      </div>
      <div className="form-row">
        <label>Calendar</label>
        <select name="szc_calendar" value={formData.szc_calendar} onChange={handleChange}>
                                    <option value="India">India</option>
                                    <option value="HongKong">HongKong</option>
                                    <option value="Japan">Japan</option>
                                    <option value="TARGET">TARGET</option>
                                    <option value="UK">UK</option>
                                    <option value="US">US</option>
        </select>
      </div>
      <div className="form-row">
        <label>Compounding</label>
        <select name="szc_compounding" value={formData.szc_compounding} onChange={handleChange}>
                         <option value="Compounded">Compounded</option>
                                    <option value="Simple">Simple</option>
        </select>
      </div>
      <div className="form-row">
        <label>Frequency</label>
        <select name="szc_frequency" value={formData.szc_frequency} onChange={handleChange}>
                                    <option value="Quarterly">Quarterly</option>
                                    <option value="Once">Once</option>
                                    <option value="Annual">Annual</option>
                                    <option value="Semiannual">Semiannual</option>
                                    <option value="EveryFourthMonth">EveryFourthMonth </option>
                                    <option value="Bimonthly">Bimonthly</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="EveryFourthWeek">EveryFourthWeek</option>
                                    <option value="Biweekly">Biweekly</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Daily">Daily</option>
        </select>
      </div>
      <div className="form-row">
        <label>Interpolation</label>
        <select name="szc_interpolation" value={formData.szc_interpolation} onChange={handleChange}>
                                  <option value="Linear">Linear</option>
                                    <option value="Cubic">Cubic</option>
                                    <option value="BackwardFlat">BackwardFlat</option>
        </select>
      </div>
      <div className="form-row">
        <label>Parallel Shift</label>
        <input type="number" name="szc_parallelshift" value={formData.szc_parallelshift} step={1/10000} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>

  );
  return (

    <div style={{ width: "100%", textAlign: "center" }}>
              <h2 style={{paddingTop: "10px"}}>Interest Rate Analyzer</h2>
        <div style={container1}>
            <div style={box1}>
                {spotRateForm()}
            </div>
            <div style={box2} align={"left"}>

         {renderChart(900, 400)} {/* Default chart */}

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
    </div>
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

const container1 = {
            display: "flex",
            gap: "10px", /* Optional: adds space between the divs */
        }

const box1 = {
            flex: "1 1 30%", /* Optional: allows the boxes to grow/shrink to fill the container */
            padding: "20px",
            backgroundcolor: "lightblue",
        }
const box2 = {
            flex: "1 1 70%", /* Optional: allows the boxes to grow/shrink to fill the container */
            padding: "20px",
            backgroundcolor: "lightblue",
        }
export default Rates;
