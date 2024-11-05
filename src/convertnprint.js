import React, { useEffect } from 'react';

const ConvertAndPrint = () => {
  const data = [
    { date: '2024-08-01', open: 150, high: 155, low: 148, close: 154 },
    { date: '2024-08-02', open: 154, high: 156, low: 149, close: 151 },
    { date: '2024-08-03', open: 151, high: 157, low: 150, close: 156 },
  ];

  useEffect(() => {
    // Convert list of dictionaries to list of lists
    const listOfLists = data.map(item => [
      item.date,
      item.open,
      item.high,
      item.low,
      item.close,
    ]);

    // Print the result to the console
    console.log(listOfLists);
  }, []);

  return <div>Check the console for the output.</div>;
};

export default ConvertAndPrint;
