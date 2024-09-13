import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./componetns/Layout";
import './style/main.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout />
    </BrowserRouter>

)