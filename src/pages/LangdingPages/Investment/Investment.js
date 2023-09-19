import Footer from "../../../assets/components/footer/Footer";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Banner from "../../../assets/images/nba-car.75a13262.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsJournalCheck } from "react-icons/bs";

import "./Investment.css";

function Investment() {
  return (
    <div className="justify-content-center">
      <img src={Banner} className="size-banner" />
    
      <div className="background-investment">
        <Container className="mt-lg-5">
        <div className="text-center txt-promotion mb-5">
          <Typography
            variant="h4"
            sx={{ color: "#401D72" }}
            pt={5}
          >
            <b>รูปแบบการลงทุนสำหรับ บุคคลทั่วไป</b>
          </Typography>
        
        </div>
          <Row>
            <Col xl={6}>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">
                  ราคาส่งพัสดุเริ่มต้นเพียง 18 บาท ส่งด่วนทั่วไทย
                </div>
              </div>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">
                  รับส่งพัสดุได้สูงสุดถึง 50 กิโลกรัม !!
                </div>
              </div>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">บริการเก็บปลายทาง.</div>
              </div>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">
                  รับสิทธิ์ใช้งานบริการเสริมที่สร้างรายได้เพิ่มเติมในอนาคต ฟรี
                  ไม่มีค่าใช้จ่าย
                </div>
              </div>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">
                  บริการออกแบบสื่อสิ่งพิมพ์( นามบัตร ป้าย สติ๊กเกอร์ ฯลฯ )
                </div>
              </div>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">
                  บริการออกแบบเว็บไซต์( เขียนเว็บไซต์ ออกเเบบระบบ ดูแลเว็บไซต์
                  ฯลฯ )
                </div>
              </div>
            </Col>
            <Col xl={6}>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">
                  บริการเคาน์เตอร์เซอร์วิส ทุกประเภท
                </div>
              </div>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment "></BsJournalCheck>
                <div className="txt-investment">
                  มีอิสระในกำหนด ค่าธรรมเนียมเคาน์เตอร์เซอร์วิส (
                  รับเต็มไม่มีแบ่ง )
                </div>
              </div>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">
                  Call Center ทุกแผนกเพื่อรองรับทุกปัญหาที่พบ
                </div>
              </div>

              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">
                  ทางเรามีแอดมินคอยดูแลช่วยเหลือแก้ไขปัญหาในการใช้งาน ตลอด 24
                  ชั่วโมง
                </div>
              </div>
              <div className="txt-flex">
                <BsJournalCheck className="icon-investment"></BsJournalCheck>
                <div className="txt-investment">
                  มีเปอร์เซ็นส่วนแบ่ง รายได้ จากการรับงานออกแบบสื่อสิ่งพิมพ์
                  เขียนเว็บไซต์ บัญชี มากถึง 25%
                </div>
              </div>
            </Col>
          </Row>
            
            <Row className="mt-5 mb-5 text-center">
                <Col lg={6}><img className="img-investment " src={require('../../../assets/images/investment/shop-fsml-01.10686155.jpg')}></img></Col>
                <Col lg={6} className="align-self-center">
                    <div className=" txt-investment-size">ขนาดเล็ก</div>
                    <div className="txt-investment-small">ร่วมลงทุนกับเรากับขนาดเล็ก บลาๆๆๆๆๆ</div>
                </Col>
                <Col lg={6} className="align-self-center">
                <div className=" txt-investment-size">ขนาดกลาง</div>
                    <div className="txt-investment-small">ร่วมลงทุนกับเรากับขนาดกลาง บลาๆๆๆๆๆ</div>
                </Col>
                <Col lg={6}><img className="img-investment " src={require('../../../assets/images/investment/shop-fsml-01.10686155.jpg')}></img></Col>
               
                <Col lg={6}><img className="img-investment " src={require('../../../assets/images/investment/shop-fsml-01.10686155.jpg')}></img></Col>
                <Col lg={6} className="align-self-center">
                <div className=" txt-investment-size">ขนาดใหญ่</div>
                    <div className="txt-investment-small">ร่วมลงทุนกับเรากับขนาดใหญ่ บลาๆๆๆๆๆ</div>
                </Col>

            </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default Investment;
