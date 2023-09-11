import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/navbar.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="xl-text-center ">
            <Nav.Link href="#features">เช็คเลขพัสดุ</Nav.Link>
            <NavDropdown title="บริการ" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
               fdfdf
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               fdf
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ศูนย์บริการของเรา" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                บริการของเรา
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="เกี่ยวกับเรา" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                บริการของเรา
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ช่วยเหลือ" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                บริการของเรา
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
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
