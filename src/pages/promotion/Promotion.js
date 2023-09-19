import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


import "bootstrap/dist/css/bootstrap.min.css";

import "./Promotion.css";

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

       

        <Slider {...settings} className="size-promotion py-5">
          <div>
            <img
              src={require("../../assets/images/promotion/A_บริการการสร้างเพจและดูแลเพจ-01.jpg")}
              className="img-promotion"
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/promotion/C_บริการการสร้างเพจและดูแลเพจ.png")}
              className="img-promotion"
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/promotion/D_บริการการสร้างเพจและดูแลเพจ.png")}
              className="img-promotion"
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/promotion/NBA poster-01.jpg")}
              className="img-promotion"
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/promotion/PROMOTION LOGO-01.jpg")}
              className="img-promotion"
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/promotion/บริการการสร้างเพจและดูแลเพจรวม.png")}
              className="img-promotion"
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/promotion/บริการสร้างไลน์-LINE-BUSINESS.png")}
              className="img-promotion"
            ></img>
          </div>
          <div>
            <img
              src={require("../../assets/images/promotion/เว็บไซต์ขายสินค้า.png")}
              className="img-promotion"
            ></img>
          </div>
        </Slider>
      </div>

      
    </>
  );
}

export default Promotion;
