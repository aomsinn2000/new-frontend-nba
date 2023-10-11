
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

//images
import Banner from "../../assets/images/bannerBackground/คู่มือออนไลน์.png";



import "./Book.css"
import Footer from "../../assets/components/footer/Footer";

function Book(){
    return(
        <div>

<img src={Banner} className="size-banner" />
     
        <div className="background-book">
            <iframe
          size="Small"
          src="https://anyflip.com/bookcase/mzlqf/red"
          seamless="seamless"
          scrolling="no"
          frameBorder="0"
          // allowtransparency="true"
          allowFullScreen="true"
        />
            </div>
            <Footer></Footer>
        </div>

    )
}
export default Book;