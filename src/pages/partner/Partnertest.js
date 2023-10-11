import React from "react";
import "./PartnerSlide.css";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function PartnerSlide() {
  return (
    <>
      <div className="text-center txt-promotion">
        <Typography variant="h4" sx={{ color: "#401D72" }} pt={5}>
          <b>พันธมิตรของเรา</b>
        </Typography>
        <Box className="line-name-partner" />
      </div>
      <div className="news-container mt-5 mb-5">
        <div className="slider-wrapper">
          <img
            src={require("../../assets/images/partner/logo-01.b392910e.png")}
            alt="Partner Logo 1"
            className="news-slider"
          />
          <img
            src={require("../../assets/images/partner/logo-02.cf843fbb.png")}
            alt="Partner Logo 2"
            className="news-slider"
          />
          <img
            src={require("../../assets/images/partner/logo-04.b89e0e66.png")}
            alt="Partner Logo 3"
            className="news-slider"
          />
          <img
            src={require("../../assets/images/partner/logo-06.f29cdd8b.png")}
            alt="Partner Logo 1"
            className="news-slider"
          />
          <img
            src={require("../../assets/images/partner/logo-07.b71c66f9.png")}
            alt="Partner Logo 2"
            className="news-slider"
          />
          <img
            src={require("../../assets/images/partner/logo-08.faa9324e.png")}
            alt="Partner Logo 3"
            className="news-slider"
          />
          <img
            src={require("../../assets/images/partner/logo-09.a521b38a.png")}
            alt="Partner Logo 3"
            className="news-slider"
          />
          <img
            src={require("../../assets/images/partner/logo-10.d98d9284.png")}
            alt="Partner Logo 3"
            className="news-slider"
          />
          <img
            src={require("../../assets/images/partner/logo-11.e30fbc79.png")}
            alt="Partner Logo 3"
            className="news-slider"
          />
          <img
            src={require("../../assets/images/partner/logonba-worlds.c6e24cda.png")}
            alt="Partner Logo 3"
            className="news-slider"
          />
        </div>
      </div>
    </>
  );
}

export default PartnerSlide;
