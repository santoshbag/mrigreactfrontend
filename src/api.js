import axios from 'axios';
import settings from './resources/settings.json';

var url = settings.dev_server;
if (settings.environment === "production"){
    url = settings.prod_server;
}
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

export const fetchSecAnalysis = async () => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/sec_anlys/`);
    const data = await response.json();
        return data;
    };

export const fetchStockPredict = async (symbol) => {
  // Replace with your actual API call
    const response = await fetch(`${url}/api/stock_pred/${symbol}/`);
        const data = await response.json();
        return data;
};

export const fetchPortOptimize = async ({portfolio}) => {
     try {
        console.log('OPT API',portfolio)
        const response = await axios.post(
            `${url}/api/portopt/`,
              portfolio,
            {
                headers: {
                        "Content-Type": "application/json",
                    },
                // data: { portfolio: portfolio },
            }
        );
        const data = await response.data;
        return data;
    } catch (error) {
        console.error("Error getting optimization data:", error);
        throw error;
    }
};

//Portfolio APIs

const createPortfolio = async (userId, portfolioName) => {
    const response = await axios.post('${url}/api/create_portfolio', {
        user_id: userId,
        portfolio_name: portfolioName,
    });
    return response.data;
};

const deletePortfolio = async (portfolioId, itemIds) => {
    const response = await axios.post('${url}/api/delete_portfolio_items', {
        portfolio_id: portfolioId,
        item_ids: itemIds
    });
    return response.data;
};
const fetchPortfolios = async (userId) => {
    const response = await axios.get(`/api/get_portfolios?user_id=${userId}`);
    const data = await response.json();
    return data;
    // setPortfolios(response.data.portfolios);
};
// export const fetchStockReturns = async (symbol) => {
//   // Replace with your actual API call
//   const response = await fetch(`https://api.example.com/returns?symbol=${symbol}&apikey=${apiKey}`);
//   const data = await response.json();
//   return data;
// };

// Other API functions...
