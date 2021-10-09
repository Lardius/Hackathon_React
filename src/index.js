import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/app.jsx";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/naveBar";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter><NavBar/> <App /></BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
