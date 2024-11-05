import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import {fetchBonds, fetchRates} from "../api";
import spotrateform from "./spotrateform";
import {useNavigate} from "react-router-dom";
import DataTable from "./datatable";

const Bonds = ({currency="INR",rateParams={}}) => {

  const [resultSet, setResultSet] = useState({});
  const [yields, setYields] = useState(false);
  const [price, setPrice] = useState(false);
  const [forwards, setForwards] = useState(false);
  const [discounts, setDiscounts] = useState(false);

  const [loaded, setLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [params, setParams] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    bond_name : 'ABC',
    issue_date : new Date(),
    maturity_date : new Date(),
    facevalue:100,
    day_count:'30-360',
    calendar:'India',
    currency:'INR',
    business_convention:'Following',
    month_end:'True',
    settlement_days:3,
    date_generation:'Backward',
    coupon_frequency:'Semiannual',
    fixed_coupon_rate:0.05,
    floating_coupon_index:"",
    floating_coupon_spread:0,
    inArrears:true,
    cap:"",
    floor:"",
    fixing:"",
    conversionRatio:"",
    conversionPrice:"",
    credit_spread:0,
    discount_curve:"SZYC_INR",
      volatility_curve:"",
      dividend_curve : "",
      underlying_spot : "",
      mean_reversion : 0.03,
      shortrate_vol : 0.12,
      hwgrid_pts : 40
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
    params['bond_name'] = formData.bond_name;
    params['issue_date'] = formData.issue_date;
    params['maturity_date'] = formData.maturity_date;
    params['facevalue'] = formData.facevalue;
    params['day_count'] = formData.day_count;
    params['calendar'] = formData.calendar;
    params['currency'] = formData.currency;
    params['business_convention'] = formData.business_convention;
    params['month_end'] = formData.month_end;
    params['settlement_days'] = formData.settlement_days;
    params['date_generation'] = formData.date_generation;
    params['coupon_frequency'] = formData.coupon_frequency;
    params['fixed_coupon_rate'] = formData.fixed_coupon_rate;
    params['floating_coupon_index'] = formData.floating_coupon_index;
    params['floating_coupon_spread'] = formData.floating_coupon_spread;
    params['inArrears'] = formData.inArrears;
    params['cap'] = formData.cap;
    params['floor'] = formData.floor;
    params['fixing'] = formData.fixing;
    params['conversionRatio'] = formData.conversionRatio;
    params['conversionPrice'] = formData.conversionPrice;
    params['credit_spread'] = formData.credit_spread;
    params['discount_curve'] = formData.discount_curve;
      params['volatility_curve'] = formData.volatility_curve;
      params['dividend_curve'] = formData.dividend_curve;
      params['underlying_spot'] = formData.underlying_spot;
      params['mean_reversion'] = formData.mean_reversion;
      params['shortrate_vol'] = formData.shortrate_vol;
      params['hwgrid_pts'] = formData.hwgrid_pts;
    setParams(params);
    // navigate('/next-page', { state: { formData } }); // Pass formData via navigate state
  };


  useEffect(() => {
  if (!loaded) {
  fetchBonds(params)
      .then(data => {
        const resultset = JSON.parse(data);
        setResultSet(resultset)
        const yields = resultset.scenario.yield
        setYields(yields)
        const price = resultset.scenario.price
        setPrice(price)
        // console.log("Tenors",tenors)
        // console.log("Zeroes",zeroes)
      });
      // setLoaded(true);
  }
    // Update payoffs when spot price changes
  }, [params]);

    console.log("Result",resultSet)
    console.log("Result Length",Object.keys(resultSet).length )
    console.log("yields",yields)
    console.log("price",price)

  // State for crosshair line positions
  const [crosshair, setCrosshair] = useState({ x: yields, y: price });

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
          x: yields,
          y: price,
          type: "scatter",
          mode: "lines",
          name: "Spot Zero Rates ",
          line: { color: "blue" },
        },

      ]}
      layout={{
        width: width,
        height: height,
        title: "Yield Graph",
        xaxis: { title: "Yields" },
        yaxis: { title: "Price" ,  range: [Math.min(price),Math.max(price)]},

      }}
      onClick={handleChartClick}
    />
  );
  const spotRateForm = () => (
                <form onSubmit={handleSubmit} >
<table>
<tr>
<td style={{verticalAlign:"top"}}>
<div className="stacked-form">
      <div className="form-row">
     <h4 style={{paddingTop: "10px" }}>Bond Specification</h4>
      </div>
      <div className="form-row">
        <label>Bond Name</label>
          <input type="text" name="bond_name" value={formData.bond_name} onChange={handleChange}/>
      </div>
      <div className="form-row">
        <label>Face Value</label>
          <input type="number" name="facevalue" value={formData.facevalue} step={1/100} onChange={handleChange}/>
      </div>
      <div className="form-row">
        <label>Issue Date</label>
          <input type="date" name="issue_date" value={formData.issue_date} onChange={handleChange} required/>
      </div>
      <div className="form-row">
        <label>Maturity Date</label>
          <input type="date" name="maturity_date" value={formData.maturity_date} onChange={handleChange} required/>
      </div>
      <div className="form-row">
        <label>Currency</label>
        <select name="szc_currency" value={formData.currency} onChange={handleChange}>
                                   <option value="INR">INR</option>
                                   <option value="USD">USD</option>
                                   <option value="GBP">GBP</option>
        </select>
      </div>
      <div className="form-row">
        <label>Day Count</label>
        <select name="day_count" value={formData.day_count} onChange={handleChange}>
                                    <option value="Actual-360">Actual-360</option>
                                    <option value="Actual-365Fixed">Actual-365Fixed</option>
                                    <option value="Actual-365FixedNoLeap">Actual-365FixedNoLeap</option>
                                    <option value="Actual-Actual">Actual-Actual</option>
                                    <option value="30-360">30-360</option>
        </select>
      </div>
      <div className="form-row">
        <label>Calendar</label>
        <select name="calendar" value={formData.calendar} onChange={handleChange}>
                                    <option value="India">India</option>
                                    <option value="HongKong">HongKong</option>
                                    <option value="Japan">Japan</option>
                                    <option value="TARGET">TARGET</option>
                                    <option value="UK">UK</option>
                                    <option value="US">US</option>
        </select>
      </div>
      <div className="form-row">
        <label>Business Convention</label>
        <select name="business_convention" value={formData.business_convention} onChange={handleChange}>
                                    <option value="Following">Following</option>
                                    <option value="ModifiedFollowing">ModifiedFollowing</option>
                                    <option value="Preceding">Preceding</option>
                                    <option value="ModifiedPreceding">ModifiedPreceding</option>
                                    <option value="Unadjusted">Unadjusted</option>
                                    <option value="HalfMonthModifiedFollowing">HalfMonthModifiedFollowing</option>
                                    <option value="Nearest">Nearest</option>
        </select>
      </div>
      <div className="form-row">
        <label>Month End</label>
        <select name="month_end" value={formData.month_end} onChange={handleChange}>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
        </select>
      </div>
      <div className="form-row">
        <label>Settlement Days</label>
          <input type="settlement_days" name="face_value" value={formData.settlement_days} step={1} onChange={handleChange}/>
      </div>
      <div className="form-row">
        <label>Date Generation</label>
        <select name="date_generation" value={formData.date_generation} onChange={handleChange}>
                                  <option value="Backward">Backward</option>
                                    <option value="Forward">Forward</option>
                                    <option value="Zero">Zero</option>
                                    <option value="ThirdWednesday">ThirdWednesday</option>
                                    <option value="Twentieth">Twentieth</option>
                                    <option value="TwentiethIMM">TwentiethIMM</option>
                                    <option value="OldCDS">OldCDS</option>
                                    <option value="CDS">CDS</option>
                                    <option value="CDS2015">CDS2015</option>
        </select>
      </div>

</div>
</td>
<td style={{verticalAlign:"top"}}>
<div className="stacked-form">

          <div className="form-row">
        <label>Frequency</label>
        <select name="coupon_frequency" value={formData.coupon_frequency} onChange={handleChange}>
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
        <label>Fixed Coupon Rate</label>
          <input type="number" name="fixed_coupon_rate" value={formData.fixed_coupon_rate} step={1/10000} onChange={handleChange}/>
      </div>
      <div className="form-row">
        <label>Floating Index</label>
        <select name="floating_coupon_index" value={formData.floating_coupon_index} onChange={handleChange}>
                                    <option value="LIBOR_3M_INR">LIBOR_3M_INR</option>
                                    <option value="LIBOR_6M_INR">LIBOR_6M_INR</option>
                                    <option value="LIBOR_3M_USD">LIBOR_3M_USD</option>
                                    <option value="LIBOR_6M_USD">LIBOR_6M_USD</option>
                                    <option value="LIBOR_3M_GBP">LIBOR_3M_GBP</option>
                                    <option value="LIBOR_6M_GBP">LIBOR_6M_GBP</option>
        </select>
      </div>
       <div className="form-row">
        <label>Floating Spread</label>
          <input type="number" name="floating_coupon_spread" value={formData.floating_coupon_spread} step={1/10000} placeholder="Libor Spread" onChange={handleChange}/>
      </div>
      <div className="form-row">
        <label>In Arrears</label>
        <select name="inArrears" value={formData.inArrears} onChange={handleChange}>
                                    <option value="True">True</option>
                                    <option value="False">False</option>
        </select>
      </div>
       <div className="form-row">
        <label>Cap Rate</label>
          <input type="number" name="cap" value={formData.cap} step={1/10000} placeholder="Cap Rate" onChange={handleChange}/>
      </div>
       <div className="form-row">
        <label>Floor Rate</label>
          <input type="number" name="floor" value={formData.floor} step={1/10000} placeholder="Floor Rate" onChange={handleChange}/>
      </div>
       <div className="form-row">
        <label>Last Libor</label>
          <input type="number" name="fixing" value={formData.fixing} step={1/10000} placeholder="Last Fixing" onChange={handleChange}/>
      </div>
       <div className="form-row">
        <label>Conversion Ratio</label>
          <input type="number" name="conversionRatio" value={formData.conversionRatio} step={1/10000} placeholder="Ratio (per 100)" onChange={handleChange}/>
      </div>
       <div className="form-row">
        <label>Conversion Price</label>
          <input type="number" name="conversionPrice" value={formData.conversionPrice} step={1/10000} placeholder="Libor Spread" onChange={handleChange}/>
      </div>
       <div className="form-row">
        <label>Credit Spread</label>
          <input type="number" name="credit_spread" value={formData.credit_spread} step={1/10000}  onChange={handleChange}/>
      </div>
      {/*<button type="submit">Submit</button>*/}
    </div>
</td>
<td style={{verticalAlign:"top"}}>
<div className="stacked-form">


      <div className="form-row">
     <h4 style={{paddingTop: "10px" }}>Valuation Parameters</h4>
      </div>
          <div className="form-row">

        <label>Discount Curve</label>
         <select name="discount_curve" value={formData.discount_curve} onChange={handleChange}>
                                   <option value="SZYC_INR">SZYC_INR</option>
                                   <option value="SZYC_USD">SZYC_USD</option>
                                   <option value="SZYC_GBP">SZYC_GBP</option>
        </select>
      </div>

       <div className="form-row">
        <label>Volatility Curve</label>
          <input type="number" name="volatility_curve" value={formData.volatility_curve} step={1/10000} placeholder="Volatility Curve" onChange={handleChange}/>
      </div>
      <div className="form-row">
        <label>Dividend Curve</label>
          <input type="number" name="dividend_curve" value={formData.dividend_curve} step={1/10000} placeholder="Dividend Curve" onChange={handleChange}/>
      </div>
       <div className="form-row">
        <label>Underlying Spot</label>
          <input type="number" name="underlying_spot" value={formData.underlying} step={1/10000} placeholder="Underlying Spot" onChange={handleChange}/>
      </div>
       <div className="form-row">
        <label>Mean Reversion</label>
          <input type="number" name="mean_reversion" value={formData.mean_reversion} step={1/10000} placeholder="Mean Reversion" onChange={handleChange}/>
      </div>
       <div className="form-row">
        <label>Short Rate Vol</label>
          <input type="number" name="shortrate_vol" value={formData.shortrate_vol} step={1/10000} placeholder="Short Rate Vol" onChange={handleChange}/>
      </div>
       <div className="form-row">
        <label>Hull White Grids</label>
          <input type="number" name="hwgrid_pts" value={formData.hwgrid_pts} step={1/10000} placeholder="Hull White Grids" onChange={handleChange}/>
      </div>
      <button type="submit">Submit</button>
    </div>
</td>
</tr>
</table>
    </form>

  );
  return (

    <div style={{ width: "100%", textAlign: "center" }}>
              <h2 style={{paddingTop: "10px"}}>Bond Calculator</h2>
        <div style={container1}>
        {/*    <div style={{alignItems: "center" }}>*/}
                {spotRateForm()}
            {/*</div>*/}
        </div>
        {/*<div style={container1}>*/}
        {/*      <h4 style={{paddingTop: "10px"}}>Analytical Results & Cashflow</h4>*/}

                {Object.keys(resultSet).length > 0 ?
                    <div>
                                      <h4 style={{paddingTop: "10px"}}>Analytical Results & Cashflow</h4>

        <div style={container1}>
            <div style={box1} align={"left"}>
                    <DataTable data={JSON.parse(resultSet.metric_df)}/>
            </div>
            <div style={box2} align={"left"}>

                    <DataTable data={JSON.parse(resultSet.cashflow_df)}/>
            </div>
        </div>
        <div style={container1}>
            <div style={box1} align={"left"}>
                 {renderChart(900, 400)} {/* Default chart */}
            </div>
        </div>
        </div>
                : ""}
        {/*</div>*/}
        {/* {renderChart(900, 400)} /!* Default chart *!/*/}

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
{/*</div>*/}
{/*    </div>*/}
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
                padding: "20px",
            align: "center"

        }

const box1 = {
            flex: "1 1 50%", /* Optional: allows the boxes to grow/shrink to fill the container */
            padding: "20px",
            backgroundcolor: "lightblue",
            overflowY: "auto", // Enables vertical scrolling when content exceeds height
            height: "600px"

        }
const box2 = {
            flex: "1 1 50%", /* Optional: allows the boxes to grow/shrink to fill the container */
            padding: "20px",
            backgroundcolor: "lightblue",
            overflowY: "auto", // Enables vertical scrolling when content exceeds height
            height: "600px"


        }
export default Bonds;
