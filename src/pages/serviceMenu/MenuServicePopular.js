import { useState } from "react";

import { sizing } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


import "./css/menuServiceMain.css";

function MenuServicePopular() {
  return (
    <>
      <div className="background-popular-menu mb-5">
        <Container>
          <div className="text-center">
            <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
              <b>บริการหลายหลายกำลังเป็นที่นิยมในตอนนี้</b>
            </Typography>
            <Typography>ยินดีต้อนรับ พร้อมบริการทุกระดับประทับใจ</Typography>
            <Box className="line-name-header" />
          </div>

          <Row>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/001-ออกแบบสื่อสิ่งพิมพ์.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/003-เติมเงินมือถือ.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/004-transfer.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/005-บัตรเติมเงิน.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/006-โปรเสริม.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/007-Kye-in-Service.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/008-Wallet.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/009-Cash-in-ฝากเงิน.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/010-บริการด้านบัญชี.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/011-บริการด้านการส่งเสริมการตลาด.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            <Col xl={2} md={4} xs={6} >
                <a href="#" >
                    <img 
                        src={require('../../assets/images/allApp/012-พ.ร.บ.png')} 
                        className="img-popular-menu mt-4"
                        >
                    </img>
                </a>
            </Col>
            
          </Row>

            <a href="#" className="d-flex justify-content-center py-5">
                <h4><b>บริการทั้งหมดที่นี่ </b></h4>
                <BsFillArrowRightCircleFill className="icon-main-menu px-1"/>
            </a>


        </Container>
      </div>
    </>
  );
}

export default MenuServicePopular;
