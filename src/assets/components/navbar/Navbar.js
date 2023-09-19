import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../navbar/navbar.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={require("../../images/logonba-worlds.c6e24cda.png")}
              className="img-logo"
            ></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="xl-text-center ">
            <Nav.Link href="#features">ติดต่อเรา</Nav.Link>
            <NavDropdown title="บริการ" id="collapsible-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/MenuServiceAll"> บริการของบริษัท</Link>
              </NavDropdown.Item>
              <NavDropdown.Item to="/ShippingCompanny">
                <Link to="/ShippingCompanny"> บริการขนส่งของเรา</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link to="/Investment">    รูปแบบการลงทุน(ทั่วไป) </Link>
            
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                รูปแบบการลงทุน(แพลตฟอร์ม)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                พื้นที่การลงทุน
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="ศูนย์บริการของเรา"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">ภาคเหนือ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ภาคตะวันออกเฉียงเหนือ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ภาคตะวันตก</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ภาคกลาง</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ภาคตะวันออก
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ภาคใต้</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="เกี่ยวกับเรา" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                ประวัติบริษัท
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                โครงสร้างบริษัท
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ช่วยเหลือ" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                คู่มือออนไลน์
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                บล๊อกข่าวสาร
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                คำถามที่พบบ่อย
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">ดาวน์โหลด</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features" className="contact-us text-center">
              ติดต่อเรา
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
