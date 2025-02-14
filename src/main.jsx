import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home.jsx";
import store from "./Redux/store";
import { Provider } from "react-redux";
import Carts from "./Components/Carts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App></App>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/products" element={<div>Products</div>}></Route>
            <Route path="/carts" element={<Carts></Carts>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
