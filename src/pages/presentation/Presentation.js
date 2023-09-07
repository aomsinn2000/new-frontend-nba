import * as React from "react";
import { sizing } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//navbar
import Navbar from "../../assets/components/navbar/Navbar";

//images
import Banner from "../../assets/images/nba-car.75a13262.jpg";
import BannerLogin from "../../assets/images/ร๊อคอินหน้าเวบ-02.jpg";
import NbaOneShop from "../../assets/images/NBA-ONE-STOP-SHOP.png";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Grid, Card, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

//css
import "./presentation.css";

//file import
import MenuServiceMain from "../serviceMenu/MenuServiceMain";
import MenuServicePopular from "../serviceMenu/MenuServicePopular";


function Presentation() {
  return (
    <div className="font-family-nba">
      <Navbar/>
      <MenuServiceMain className="test1"/>
      <MenuServicePopular className="test2"/>

    </div>
  );
}

export default Presentation;
