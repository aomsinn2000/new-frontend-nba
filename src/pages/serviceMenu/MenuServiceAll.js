import Footer from "../../assets/components/footer/Footer";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import data from "../ServiceMenu/data/MenuServiceData"

function MenuAll() {
  return (
    <div className="background-main-menu-all">
      <Container>
        <div className="text-center">
          <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
            <b>บริการเซอร์วิสของเราทั้งหมดที่นี่</b>
          </Typography>
          <Typography>ยินดีต้อนรับ พร้อมบริการทุกระดับประทับใจ</Typography>
          <Box className="line-name-header" />
        </div>
        {data.map(function (data) {
          return (
            <Row key={data.id} className="mt-5">
              <Col md={2} xs={12} >
                <Row>
                  <Col md={12} xs={3}> <img
                  src={data.imageMain}
                  className="img-main-all-menu align-text-bottom "
                ></img></Col>
                  <Col xs={9} className="show-mobile"> <Typography variant="h6" sx={{ color: "#401D72" }} pt={5}>
                    <b>{data.title} </b>
                    <span>( {data.description} )</span>
                  </Typography></Col>
                </Row>
               
              
              </Col>
              <Col md={10} >
                <Row>
                  <Typography variant="h6" sx={{ color: "#401D72" }} pt={5} className="show-desktop">
                    <b>{data.title} </b>
                    <span>( {data.description} )</span>
                  </Typography>
                  {data.items.map(function (item) {
                    return (
                      <Col md={2} xs={4} key={item.name}>
                        
                        <div className="all-menu-relative">
                          <img
                            src={item.image} // แก้ไขการเรียกใช้รูปภาพ
                            className="img-detail-all-menu"
                          />
                          <div className="overlay">
                            <div className="text">{item.detail}</div>{" "}
                            {/* แสดงรายละเอียดของรายการ */}
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container>
      <Footer />
    </div>
  );
}

export default MenuAll;
