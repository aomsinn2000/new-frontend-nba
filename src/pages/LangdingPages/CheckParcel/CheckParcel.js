

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//images
import Banner from "../../../assets/images/bannerBackground/เช็คเลขพัสดุ.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col ,Button } from "react-bootstrap";

import "./CheckParcel.css"

import data from "./data/CheckParcelData"
import Footer from "../../../assets/components/footer/Footer";

function CheckParcel() {
  return (
    <div>
      <img src={Banner} className="size-banner" />
      
      <Container className="mb-5">
      <div className="text-center txt-check">
        <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
          <b>เราเป็นพันธมิตรกับขนส่งชั้นนำทั่วประเทศ</b>
        </Typography>
        <Typography>NBA Digital Service</Typography>
        <Box className="line-name-header" />
      </div>
            <Row>
                {data.map((data) => (
                     <Col md={12} lg={6}> 
                     <Row className="Card">
                             <Col xs={4} ><img className="img-check"  src={data.image} ></img></Col>
                             <Col xs={8}>
                                 <h5 className="mt-2"><strong>{data.name}</strong></h5>
                                 <p>{data.position}</p>
                                 <p>{data.description}</p>
                                 <Button    key={data.linkWeb}
              onClick={() => window.open(data.linkWeb, "_blank")}>ตรวจสอบสถานะพัสดุ</Button>
                             </Col>
                     </Row>
                 </Col>
                ))}
               
              
            </Row>
    </Container>
    <Footer/>
    </div>
  );
}
export default CheckParcel;
