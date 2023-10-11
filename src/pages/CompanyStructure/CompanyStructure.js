import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//images
import Banner from "../../assets/images/bannerBackground/โครงสร้างบริษัท.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container} from "react-bootstrap";

import "./CompanyStructure.css";
import Footer from "../../assets/components/footer/Footer";

function CompanyStructure() {
  return (
    <div>
      <img src={Banner} className="size-banner" />
      <div className="background-company">
        <Container></Container>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default CompanyStructure;
