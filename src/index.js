import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import "./index.css";
import Router from "./pages/router/Routing";
import {store} from './store'
import { Provider } from 'react-redux'
require("react-datepicker/dist/react-datepicker-cssmodules.css");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>,
);

reportWebVitals();