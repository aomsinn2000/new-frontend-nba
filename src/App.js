import * as React from "react";

//Components Navbar and Footer
import Navbar from "../src/assets/components/navbar/Navbar";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//css
import "../src/pages/Presentation/Presentation.css";

//file import
import Presentation from "../src/pages/Presentation/Presentation";
import MenuServiceAll from "../src/pages/ServiceMenu/MenuServiceAll";
import ShippingCompanny  from "../src/pages/ShippingCompany/ShippingCompany";
import Investment from "./pages/LangdingPages/Investment/Investment";



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
        </Routes>
      </div>
    </div>
  );
}

export default AppTest;
