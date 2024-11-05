import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './lib/animate/animate.min.css';
import './lib/lightbox/css/lightbox.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './css/bootstrap.min.css';
import './css/style.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MarketPage from "./market_page";
import HomePage from "./home_page";
import Test from "./test";
import StockPage from "./stock_page";
import NewsPage from "./news";
import IAPage from "./ia_page"
import RAPage from "./ra_page";
import SSPage from "./ss_page";
import MFPage from "./mf_page";
import Login from "./components/userlogin";
import PortfolioPage from "./portfolio";
import StockHome from "./stock_home";
import RatesPage from "./rates_page";
import BondPage from "./bond_page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/marketpage" element={<MarketPage />} />
        <Route path="/stock/" element={<StockHome />} />
        <Route path="/stock/:symbol" element={<StockPage />} />
        <Route path="/news/" element={<NewsPage />} />
        <Route path="/ia/" element={<IAPage />} />
        <Route path="/ra/" element={<RAPage />} />
        <Route path="/ss/" element={<SSPage />} />
        <Route path="/mf/:mfsymbol" element={<MFPage />} />
        <Route path="/mf/" element={<MFPage />} />
        <Route path="/portfolio/" element={<PortfolioPage />} />
        <Route path="/rates/" element={<RatesPage />} />
        <Route path="/bonds/" element={<BondPage />} />

        <Route path="/test" element={<Test />} />
        {/*<Route path="/returns" element={<ReturnsPage />} />*/}
        {/*<Route path="/strategies" element={<StrategiesPage />} />*/}
        {/*<Route path="/rates" element={<RatesPage />} />*/}
      </Routes>
    </Router>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);

// const marketsnapshotRoot = document.getElementById('marketsnapshot-root');
// if (marketsnapshotRoot) {
//   ReactDOM.createRoot(marketsnapshotRoot).render(
//     <React.StrictMode>
//         <marketsnapshot />
//     </React.StrictMode>
//   );
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
