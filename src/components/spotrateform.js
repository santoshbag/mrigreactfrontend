import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import your CSS styling

const SpotRateForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    szc_currency: 'INR',
    szc_daycount: 'Actual-360',
    szc_calendar: 'India',
    szc_compounding: 'Compounded',
    szc_interpolation: 'Linear',
    szc_parallelshift: 0
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
    navigate('/next-page', { state: { formData } }); // Pass formData via navigate state
  };

  return (
    <form className="stacked-form" onSubmit={handleSubmit}>

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
        <select name="szc_frequency" value={formData.dropdown5} onChange={handleChange}>
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
        <label>P Shift</label>
        <input type="number" name="szc_parallelshift" value={formData.szc_parallelshift} step={1/10000} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SpotRateForm;
