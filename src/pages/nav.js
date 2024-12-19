import logo from '../logo.svg';
import '../App.css';

// src/App.js
import React from 'react';
import StockSearch from "../components/search";



function NAV({activetag="home"}) {
    console.log("HIGHLIGHT PAGE",activetag)
  return (
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 ">
        <a href="/" className="navbar-brand p-0">
          <h1 className="text-primary"><i className="fas fa-search-dollar me-3"></i>MrigAnalyics</h1>
        </a>
          {activetag === "login" ? "" :
        <StockSearch/>
          }
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
          {activetag === "login" ? ""
              :
        <div className="collapse navbar-collapse " id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className={activetag === "home" ? "nav-item nav-link active" : "nav-item nav-link"}>Home</a>
            <a href="/news" className={activetag === "news" ? "nav-item nav-link active" : "nav-item nav-link"}>News</a>
            <a href="/marketpage" className={activetag === "marketpage" ? "nav-item nav-link active" : "nav-item nav-link"}>Markets</a>
            {/*<!--<a href="service.html" class="nav-item nav-link">Services</a>-->*/}
            <div className="nav-item dropdown ">
              <a href="/stock/" className={activetag === "service" ? "nav-link active" : "nav-link"} data-bs-toggle="dropdown">
                <span className="dropdown-toggle">Services</span>
              </a>
              <div className="dropdown-menu m-0">
                <a href="/stock/" className="dropdown-item">Stocks</a>
                <a href="/mf/" className="dropdown-item">Mutual Funds</a>
                <a href="/ia/" className="dropdown-item">Investment Advisory</a>
                <a href="/portfolio/" className="dropdown-item">Portfolio</a>
                <a href="/ra/" className="dropdown-item">Risk Analytics</a>
                <a href="softs.html" className="dropdown-item">Software</a>
                <a href="ds.html" className="dropdown-item">Data Services</a>
              </div>
            </div>
            <a href="blog.html" className={activetag === "blog" ? "nav-item nav-link active" : "nav-item nav-link"}>Blogs</a>
            <a href="about.html" className={activetag === "about" ? "nav-item nav-link active" : "nav-item nav-link"}>About</a>
            <a href="contact.html" className={activetag === "contact" ? "nav-item nav-link active" : "nav-item nav-link"}>Contact Us</a>
          </div>
          <a href="#" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Get Started</a>
        </div>
        }
      </nav>

  );
}

export default NAV;



