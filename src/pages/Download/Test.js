import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Container,Row,Col,Accordion  } from "react-bootstrap";
//images
import Banner from "../../assets/images/bannerBackground/ดาวน์โหลด.png";

// import "./Blog.css";
// import Footer from "../../../assets/components/footer/Footer";

import "./Download.css"; // ปรับเป็นชื่อไฟล์ของคุณ
// import { BsPrinter } from "react-icons/bs";


function Blog() {
  const [isTestVisible, setIsTestVisible] = useState(true);
  const [isFirstVisible, setIsFirstVisible] = useState(false);

  const toggleTest = () => {
    setIsTestVisible(true);
    setIsFirstVisible(false);
  };

  const toggleFirst = () => {
    setIsTestVisible(false);
    setIsFirstVisible(true);
  };
  return (
    <div>
      <img src={Banner} className="size-banner" />
      <div className="background-company">
        <div>
        <div className="text-center txt-history mb-5">
        <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
          <b>ดาวน์โหลด</b>
        </Typography>
        <Typography>NBA Digital Service</Typography>
        <Box className="line-name-header" />
      </div>

      <div>
        <Row className="justify-content-center">
          <Col md={2}> <div className="test"onClick={toggleTest}>
            
            </div></Col>
          <Col md={2}> <div className="test"onClick={toggleFirst}></div></Col>
          <Col md={2}> <div className="test"></div></Col>
          <Col md={2}> <div className="test"></div></Col>
          <Col md={2}> <div className="test"></div></Col>
         
        </Row>

      {isTestVisible && <div className="background-detail"> 
      <Accordion className="mt-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion></div>}
      {isFirstVisible && <div className="background-detail">222</div>}
    </div>         
        </div>
      </div>
    </div>
  );
}
export default Blog;
