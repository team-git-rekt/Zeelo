import React from "react"
import Overview from "./components/Overview.jsx"
import Dropdown from "./components/Dropdown.jsx"
import Pricing from "./components/Pricing.jsx"
import './app.css'
import "regenerator-runtime/runtime"
import "@babel/polyfill";

const App = () => {
  return (
    <div>
      <Pricing />
      <Overview />
      <Dropdown />
    </div>
  );
};

export default App;
