import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import "../footer/footer.css";

function Footer() {
  return (
    <>
      <div className="background-footer">
        <Row className="pt-2">
          <Col md={3} className="d-flex justify-content-center">
            <img
              src={require("../../images/NBA-ONE-STOP-SHOP.png")} className="img-footer"
            />
          </Col>
          <Col md={2} xs={6}>
                <h3 className="txt-head-footer">Page</h3>
                <a href="" className="txt-footer">เช็คเลขพัสดุ</a><br/>
                <a href="" className="txt-footer">บริการของเรา</a><br/>
                <a href="" className="txt-footer">รูปแบบการลงทุน</a><br/>
                <a href="" className="txt-footer">ประวัติของบริษัท</a><br/>
                <a href="" className="txt-footer">โครงสร้างบริษัท</a><br/>
                <a href="" className="txt-footer">ข่าวสาร</a><br/>
                <a href="" className="txt-footer">คำถามที่พบบ่อย</a><br/>
          </Col>
          <Col md={2} xs={6}>
          <h3 className="txt-head-footer">เว็บแนะนำ</h3>
                <a href="" className="txt-footer">E-Branch</a><br/>
                <a href="" className="txt-footer">E-TRANFER</a><br/>
                <a href="" className="txt-footer">NBA-Express</a><br/>
                <a href="" className="txt-footer">Happy-Point</a><br/>
                <a href="" className="txt-footer">NBA-Platform</a><br/>
          </Col>
          <Col md={3} xs={6}>
          <h3 className="txt-head-footer">ที่อยู่</h3>
                <a href="" className="txt-footer">298/1 หมู่ที่ 3 ตำบล สันผักหวาน อำเภอ หางดง จังหวัด เชียงใหม่ 50230</a><br/>

          </Col>
          <Col md={2} xs={6}>
          <h3 className="txt-head-footer">ติดต่อสอบถาม</h3>
                <a href="" className="txt-footer">ติดต่อเราโดยตรง</a><br/>

          </Col>
        </Row>
      </div>

  
    </>
  );
}

export default Footer;
