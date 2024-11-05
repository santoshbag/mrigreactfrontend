import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import {fetchStockLevels, fetchStockPrice} from "../api";
import axios from 'axios';

import './DataTable.css';  // CSS for table styling

const DataTable = ({ data,table="" }) => {

  // // Check if data is defined and has columns and rows before attempting to render
  // if (!data || !data.columns || !data.data) {
  //   return <div>No data available</div>;
  // }
  const { columns, data: rows } = data;
  const tablekinds = ['ta','st_macd','movers'];

  // State for sorting: column index and sort direction
  const [sortConfig, setSortConfig] = useState({ columnIndex: null, direction: 'ascending' });

  // Function to sort the rows by a specific column
  const sortedRows = React.useMemo(() => {
    if (sortConfig.columnIndex !== null) {
      const sortedData = [...rows];
      sortedData.sort((a, b) => {
        if (a[sortConfig.columnIndex] < b[sortConfig.columnIndex]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.columnIndex] > b[sortConfig.columnIndex]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
      return sortedData;
    }
    return rows;
  }, [rows, sortConfig]);

  // Function to handle sorting when a column header is clicked
  const handleSort = (columnIndex) => {
    let direction = 'ascending';
    if (sortConfig.columnIndex === columnIndex && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ columnIndex, direction });
  };

// Function to get a specific style for a column
  const getColumnStyle = (colIndex) => {
    if (columns[colIndex] === 'Price') {
      return { backgroundColor: '#ffebcd' }; // Light brown for Price
    } else if (columns[colIndex] === 'Change') {
      return { backgroundColor: '#dff0d8' }; // Light green for Change
    } else {
      return {};
    }
  };

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} onClick={() => handleSort(index)}>
                {col.charAt(0).toUpperCase() + col.slice(1)} {sortConfig.columnIndex === index ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                // <td key={cellIndex} style={getColumnStyle(cellIndex)}>{(table === 'ta') && (cellIndex === 0) ?
                //     <a href="/stockpage/${cell}">{cell}</a> : {cell}}</td>
                <td key={cellIndex} style={getColumnStyle(cellIndex)}>
                  {tablekinds.includes(table) && cellIndex === 0 ? <a href={"/stock/".concat(cell,"/")}>{cell}</a> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
