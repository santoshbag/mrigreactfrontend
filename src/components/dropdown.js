// Dropdowns.js
import React from 'react';
import Select from 'react-select';

function Dropdown({ options, onChange, value, placeholder }) {
    return (
        <Select
            options={options}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            isSearchable
        />
    );
}

export default Dropdown;
