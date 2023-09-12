import * as React from "react";

//Components Navbar and Footer
import Navbar from "../src/assets/components/navbar/Navbar";
import Footer from "../src/assets/components/footer/Footer";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Grid, Card, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

//css
import "../src/pages/presentation/presentation.css";

//file import
import Presentation from "../src/pages/presentation/Presentation";
import MenuServiceAll from "../src/pages/serviceMenu/MenuServiceAll";



import { Route, Routes } from "react-router-dom";

function AppTest() {
  return (
    <div className="font-family-nba">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Presentation />} />
          <Route path="/MenuServiceAll" element={<MenuServiceAll />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppTest;
