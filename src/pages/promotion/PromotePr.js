import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import "../promotion/promotion.css";

function PromotePr() {
  return (
    <>
      <div className="background-promote text-center">
        <Container className="background-white-promote">
          <Row className="align-items-center">
            <div className="text-center txt-promotion">
              <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
                <b>บริการหลายหลายกำลังเป็นที่นิยมในตอนนี้</b>
              </Typography>
              <Typography>ยินดีต้อนรับ พร้อมบริการทุกระดับประทับใจ</Typography>
              <Box className="line-name-header" />
            </div>
            <Col md={6} className="mt-5">
              <img
                src={require("../../assets/images/ร๊อคอินหน้าเวบ-02.jpg")}
                className="img-promote"
              ></img>
            </Col>
            <Col md={6}>
              <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
                <b>ที่เดียวครบ...จบที่เรา จบทุกบริการ</b>
              </Typography>
              <Typography>ยินดีต้อนรับ พร้อมบริการทุกระดับประทับใจ</Typography>
            </Col>
            <Col md={6}>
              <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
                <b>ที่เดียวครบ...จบที่เรา จบทุกบริการ</b>
              </Typography>
              <Typography>ยินดีต้อนรับ พร้อมบริการทุกระดับประทับใจ</Typography>
            </Col>
            <Col md={6} className="mt-5">
              <img
                src={require("../../assets/images/ร๊อคอินหน้าเวบ-02.jpg")}
                className="img-promote"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PromotePr;
