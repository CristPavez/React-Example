import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "../../pages/Contact/Contact";
import Notfound from "../../pages/404/Notfound";
import Home from "../../pages/Home/Home";
import Header from "../header/Header";

export default function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contacto" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
