import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//images
import Banner from "../../assets/images/nba-car.75a13262.jpg";
import BannerLogin from "../../assets/images/ร๊อคอินหน้าเวบ-02.jpg";
import NbaOneShop from "../../assets/images/NBA-ONE-STOP-SHOP.png";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

//css
import "./css/ServiceMenu.css";

function MenuServiceMain() {
  return (
    <div className="font-family-nba">
      
      <div>
      <img src={Banner} className="size-banner" />
      <img src={BannerLogin} className="size-banner-login" />
      </div>

      <div className="background-main-menu">
        <div className="text-center">
          <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
            <b>WELCOME TO.....NBA Digital Service</b>
          </Typography>
          <Typography>ยินดีต้อนรับ พร้อมบริการทุกระดับประทับใจ</Typography>
          <Box className="line-name-header" />
        </div>
        <Row className="mt-5">
          <Col sm={6} md={4} className="top-line">
            <Box className="box-nba-oneshop" pt={2}>
              <img src={NbaOneShop} className="img-nbashop"></img>
              <a href="#">
                <h4 className="pt-4">
                  <b>NBA One Shop</b>
                </h4>
                <p className="txt-detail-main-menu">
                  เครือข่ายการขนส่งที่แข็งแกร่งที่ให้บริการขนส่งสินค้ารวมอยู่ในศูนย์บริการครบวงจรของเราทั้งหมดแล้ววันนี้{" "}
                </p>
                <BsFillArrowRightCircleFill className="icon-main-menu" />
              </a>
            </Box>
          </Col>
          <Col sm={6} md={4} className="top-line">
            <Box className="box-nba-oneshop" pt={2}>
              <img src={NbaOneShop} className="img-nbashop"></img>
              <a href="#">
                <h4 className="pt-4">
                  <b>NBA Smart Platform</b>
                </h4>
                <p className="txt-detail-main-menu">
                  เครือข่ายการขนส่งที่แข็งแกร่งที่ให้บริการขนส่งสินค้ารวมอยู่ในศูนย์บริการครบวงจรของเราทั้งหมดแล้ววันนี้{" "}
                </p>
                <BsFillArrowRightCircleFill className="icon-main-menu" />
              </a>
            </Box>
          </Col>
          <Col sm={6} md={4}>
            <Box className="box-nba-oneshop" pt={2}>
              <img src={NbaOneShop} className="img-nbashop"></img>
              <a href="#">
                <h4 className="pt-4">
                  <b>สมัครเป็นสมาชิกกับเราที่นี่</b>
                </h4>
                <p className="txt-detail-main-menu">
                  เครือข่ายการขนส่งที่แข็งแกร่งที่ให้บริการขนส่งสินค้ารวมอยู่ในศูนย์บริการครบวงจรของเราทั้งหมดแล้ววันนี้{" "}
                </p>
                <BsFillArrowRightCircleFill className="icon-main-menu" />
              </a>
            </Box>
          </Col>
        </Row>
      </div>









    </div>
  );
}

export default MenuServiceMain;
