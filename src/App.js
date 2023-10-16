import * as React from "react";

//Components Navbar and Footer
import Navbar from "../src/assets/components/navbar/Navbar";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//css
import "./pages/Presentation/Presentation.css";

//file import
import Presentation from "./pages/Presentation/Presentation";
import MenuServiceAll from "../src/pages/ServiceMenu/MenuServiceAll";
import ShippingCompanny  from "../src/pages/ShippingCompany/ShippingCompany";
import Investment from "./pages/LangdingPages/Investment/Investment";
import CheckParcel from "./pages/LangdingPages/CheckParcel/CheckParcel";
import CompanyHistory from "./pages/CompanyHistory/CompanyHistory";
import CompanyStructure from "./pages/CompanyStructure/CompanyStructure";
import Book from "./pages/Book/Book";
// import News from "../src/pages/News/News"
import Blog from "./pages/LangdingPages/Blog/Blog";
import  Download  from "./pages/Download/Download";

import { Route, Routes } from "react-router-dom";

function AppTest() {
  return (
    <div className="font-family-nba">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/MenuServiceAll" element={<MenuServiceAll />} />
          <Route path="/ShippingCompanny" element={<ShippingCompanny />}  />
          <Route path="/Investment" element={<Investment/>} />
          <Route path="/CheckParcel" element={<CheckParcel/>} />
          <Route path="/CompanyHistory" element={<CompanyHistory/>} />
          <Route path="/CompanyStructure" element={<CompanyStructure/>} />
          <Route path="/Book" element={<Book/>} />
          {/* <Route path="/News" element={<News/>} /> */}
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Download" element={<Download/>} />

        </Routes>
      </div>
    </div>
  );
}

export default AppTest;
