import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/about";
import Dashboard from "./component/Dashboard";
import { Provider } from "react-redux";
import store from "./component/Store/store";
import ContactUs from "./component/ContactUs";
import Singuplogin from "./component/Singuplogin";
import Menu from "./component/Menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Home" element={<App />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Singuplogin" element={<Singuplogin />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
