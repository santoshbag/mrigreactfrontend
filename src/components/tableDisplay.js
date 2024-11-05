import React, { useState, useEffect } from 'react';
import DataTable from "./datatable";
import {fetchStockPrice, fetchTable} from "../api";

function DisplayTable({table,symbol="",tdata=""}) {
  const [tableData, setTableData] = useState(null);
  const url = 'http://127.0.0.1:8000';

  useEffect(() =>{
    // Simulate fetching data from API
    if (tdata != "") {
      const tableData = JSON.parse(tdata);
      setTableData(tableData);
    }
    else
     { fetchTable(table,symbol)
      .then(data => {
      // const response = await axios.get('API_ENDPOINT');
       const tableData = JSON.parse(data);
       // tableData['data'] = tableData['data'].map((line) => {
       //   line[0] = '<a href="/stock/'.concat(line[0], '/" >',line[0], "<", "/a>");
       //   return line;
       // });
      setTableData(tableData);
      // console.log("SANTOSH" , tableData.data);
    });

  }}, [symbol]);

  if (!tableData) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <DataTable data={tableData} table={table} />
    </div>
  );
}

export default DisplayTable;
