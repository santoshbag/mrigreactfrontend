import axios from 'axios';

const url = 'http://127.0.0.1:8000';

export const fetchStockPrice = async (symbol) => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/stockdata/${symbol}/1Y`);
    const data = await response.json();
        return data;
    };

export const fetchMFPrice = async (symbol) => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/mf/${symbol}/`);
    const data = await response.json();
        return data;
    };



export const fetchStockLevels = async (symbol) => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/stockdata/l/${symbol}/`);
    const data = await response.json();
        return data;
    };

export const fetchStockOITree = async (symbol) => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/stockdata/oi/${symbol}/`);
    const data = await response.json();
        return data;
    };

export const fetchTable = async (tablekind, symbol="") => {
    // Replace with your actual API call
    var api = "";

    if (tablekind == "ta") {
        api = "/api/stockdata/ta/"
        const response = await fetch(`${url}${api}${symbol}/`);
        const data = await response.json();
        // console.log("API  -> "+data);
        return data;
    }

        if (tablekind == "st_macd") {
        api = "/api/ss/st_macd"
        const response = await fetch(`${url}${api}${symbol}/`);
        const data = await response.json();
        // console.log("API  -> "+data);
        return data;
    }
};

export const fetchPage = async (page, symbol="") => {
    // Replace with your actual API call
    var api = "";

    if (page == "stockpage") {
        api = "/api/stockpage/"
        const response = await fetch(`${url}${api}${symbol}/`);
        const data = await response.json();
        // console.log("API  -> "+data);
        return data;
    }

    if (page == "mfpage") {
        api = "/api/mf/"
        const apiurl = symbol === "" ? `${url}${api}` : `${url}${api}${symbol}/`;

        // console.log("API URL -> "+`${url}${api}${symbol}/`);
        const response = await fetch(`${apiurl}`);
        const data = await response.json();
        // console.log("API  -> "+data);
        return data;
    }

        if (page == "pfpage") {
        api = "/api/portfolio/"
        const apiurl = symbol === "" ? `${url}${api}` : `${url}${api}${symbol}/`;

        // console.log("API URL -> "+`${url}${api}${symbol}/`);
        const response = await fetch(`${apiurl}`);
        const data = await response.json();
        // console.log("API  -> "+data);
        return data;
    }
};


export const fetchNews = async () => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/news/`);
    const data = await response.json();
        return data;
    };


export const fetchMarketOptions = async (symbol) => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/mops/${symbol}/`);
    const data = await response.json();
        return data;
    };


export const fetchMarketMovers = async () => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/stockmovers/`);
    const data = await response.json();
        return data;
    };

export const fetchRates = async (currency,params) => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/rates/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" // Optional, if your server returns JSON
        },
        body: JSON.stringify(params)
    });
    const data = await response.json();
        return data;
    };

export const fetchBonds = async (params) => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/bonds/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json" // Optional, if your server returns JSON
        },
        body: JSON.stringify(params)
    });
    const data = await response.json();
        return data;
    };
// export const fetchStockReturns = async (symbol) => {
//   // Replace with your actual API call
//   const response = await fetch(`https://api.example.com/returns?symbol=${symbol}&apikey=${apiKey}`);
//   const data = await response.json();
//   return data;
// };

// Other API functions...
