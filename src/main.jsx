import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/style.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Linktree from "./pages/Linktree.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
	    <Route path="/" element={<App />} />
      <Route path="/Linktree" element={<Linktree />} />
	</Routes>
  </BrowserRouter>
);
