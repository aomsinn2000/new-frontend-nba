import * as React from "react";


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
import MenuServiceAll from "../serviceMenu/MenuServiceAll";
import Promotion from "../promotion/Promotion";


function Presentation() {
  return (
    <div className="font-family-nba">
      <Navbar/>
      <MenuServiceMain/>
      <MenuServicePopular></MenuServicePopular>
      <Promotion></Promotion>

    </div>
  );
}

export default Presentation;
