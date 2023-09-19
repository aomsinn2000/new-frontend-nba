import Footer from "../../assets/components/footer/Footer";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


//images
import Banner from "../../assets/images/bannerBackground/เมสเซนเจอร์ส่งเอกสาร.9aa3bf4f.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import "./ShippingCompany.css";

import data from "../ShippingCompany/data/ShippingCompanyData";

function ShippingCompanny() {
  return (
    <div>
    <img src={Banner} className="size-banner" />
    <div className="background-shipping">
      
      <Container>
      <div className="text-center txt-shipping mb-5">
        <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
          <b>เราเป็นพันธมิตรกับขนส่งชั้นนำทั่วประเทศ</b>
        </Typography>
        <Typography>NBA Digital Service</Typography>
        <Box className="line-name-header" />
      </div>
        <Row className="text-center">
          {data.map((data) => (
            <Col
              md={4}
              lg={3}
              xs={6}
              key={data.link}
              onClick={() => window.open(data.link, "_blank")}
            >
              <img className="img-shipping" src={data.image} /><br/>
              <a className="txt-name-shipping" href={data.link}>
                {data.name}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    <Footer/>
    </div>
    
  );
}

export default ShippingCompanny;
