import Footer from "../../assets/components/footer/Footer";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import data from "../serviceMenu/data/MenuServiceData";

function MenuAll() {
  return (
    <div>
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
            <Row key={data.id}>
              <Col xl={2}>
                <img
                  src={data.imageMain}
                  className="img-main-all-menu align-text-bottom "
                ></img>
              </Col>
              <Col xl={10}>
                <Row>
                  <Typography variant="h6" sx={{ color: "#401D72" }} pt={5}>
                    <b>{data.title} </b>
                    <span>( {data.description} )</span>
                  </Typography>
                  {data.items.map(function (item) {
                    return (
                      <Col xl={2} key={item.name}>
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
