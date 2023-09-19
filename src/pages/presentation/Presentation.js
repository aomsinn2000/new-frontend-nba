import * as React from "react";


//Components Navbar and Footer
import Navbar from "../../assets/components/navbar/Navbar";
import Footer from "../../assets/components/footer/Footer";

//images
import Banner from "../../assets/images/nba-car.75a13262.jpg";
import BannerLogin from "../../assets/images/ร๊อคอินหน้าเวบ-02.jpg";
import NbaOneShop from "../../assets/images/NBA-ONE-STOP-SHOP.png";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Grid, Card, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

//css
import "./Presentation.css";

//file import
import MenuServiceMain from "../ServiceMenu/MenuServiceMain";
import MenuServicePopular from "../ServiceMenu/MenuServicePopular";
import MenuServiceAll from "../ServiceMenu/MenuServiceAll";
import Promotion from "../Promotion/Promotion";
import PromotePr from "../Promotion/PromotePr";
import PartnerSlide from "../Partner/PartnerSlide";



function Presentation() {
  return (
    <div className="font-family-nba">
      <MenuServiceMain/>
      <MenuServicePopular></MenuServicePopular>
      <Promotion></Promotion>
      <PromotePr></PromotePr>
      <PartnerSlide></PartnerSlide>
      <Footer></Footer>

    </div>
  );
}

export default Presentation;








