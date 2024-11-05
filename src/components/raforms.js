import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import your CSS styling

const StackedForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    dropdown4: '',
    dropdown5: '',
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
    navigate('/next-page'); // Navigates to the specified page
  };

  return (
    <form className="stacked-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Field 1:</label>
        <input type="text" name="field1" value={formData.field1} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>Field 2:</label>
        <input type="text" name="field2" value={formData.field2} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>Field 3:</label>
        <input type="text" name="field3" value={formData.field3} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>Field 4:</label>
        <input type="text" name="field4" value={formData.field4} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>Field 5:</label>
        <input type="text" name="field5" value={formData.field5} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label>Dropdown 1:</label>
        <select name="dropdown1" value={formData.dropdown1} onChange={handleChange}>
          <option value="">Select</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <div className="form-row">
        <label>Dropdown 2:</label>
        <select name="dropdown2" value={formData.dropdown2} onChange={handleChange}>
          <option value="">Select</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <div className="form-row">
        <label>Dropdown 3:</label>
        <select name="dropdown3" value={formData.dropdown3} onChange={handleChange}>
          <option value="">Select</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <div className="form-row">
        <label>Dropdown 4:</label>
        <select name="dropdown4" value={formData.dropdown4} onChange={handleChange}>
          <option value="">Select</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <div className="form-row">
        <label>Dropdown 5:</label>
        <select name="dropdown5" value={formData.dropdown5} onChange={handleChange}>
          <option value="">Select</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StackedForm;
