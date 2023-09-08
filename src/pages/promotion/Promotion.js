import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import "../promotion/promotion.css";

//slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Promotion() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div class="background-promotion">
        <div className="text-center txt-promotion">
          <Typography
            className="test2"
            variant="h4"
            sx={{ color: "#401D72" }}
            pt={5}
          >
            <b>บริการหลายหลายกำลังเป็นที่นิยมในตอนนี้</b>
          </Typography>
          <Typography>ยินดีต้อนรับ พร้อมบริการทุกระดับประทับใจ</Typography>
          <Box className="line-name-header" />
        </div>

     

        <Container>
        <Slider {...settings} className="py-5">
         
         <div>
           <img
             src={require("../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png")}
             className="img-promotion"
           ></img>
         </div>
         <div>
           <img
             src={require("../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png")}
             className="img-promotion"
           ></img>
         </div>
         <div>
           <img
             src={require("../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png")}
             className="img-promotion"
           ></img>
         </div>
         <div>
           <img
             src={require("../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png")}
             className="img-promotion"
           ></img>
         </div>
         <div>
           <img
             src={require("../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png")}
             className="img-promotion"
           ></img>
         </div>
         <div>
           <img
             src={require("../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png")}
             className="img-promotion"
           ></img>
         </div>
         <div>
           <img
             src={require("../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png")}
             className="img-promotion"
           ></img>
         </div>
         <div>
           <img
             src={require("../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png")}
             className="img-promotion"
           ></img>
         </div>
         <div>
           <img
             src={require("../../assets/images/allApp/002-เคาน์เตอร์เซอร์วิส.png")}
             className="img-promotion"
           ></img>
         </div>
       </Slider>
        </Container>
      </div>
    </>
  );
}

export default Promotion;
