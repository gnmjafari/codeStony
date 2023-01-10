import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Dashboard from "./component/Dashboard";
import { Provider } from "react-redux";
import store from "./component/Store/store";
import ContactUs from "./component/ContactUs";
import RegisterForm from "./component/RegisterForm";
import Menu from "./component/Menu";
import "./index.css";
import Home from "./component/Home";
import LoginForm from "./component/LoginForm";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/RegisterForm" element={<RegisterForm />} />
            <Route path="/LoginForm" element={<LoginForm />} />
          </Routes>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
