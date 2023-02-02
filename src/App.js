import React from "react";
import ReactDOM from "react-dom/client";

import Main from "./Component/Hostel_description_page/Ammenities_section/Main";
import { BrowserRouter } from "react-router-dom";
import { Pricing } from "./Component/Hostel_description_page/Ammenities_section/PricingRouting";
import { PhotoGallery } from "./Component/Hostel_description_page/Photogallery/PhotoGallery";

import {
  StyledLine,
  StyleDiv,
} from "./Component/Hostel_description_page/Ammenities_section/styled";

import Review from "./Component/Hostel_description_page/Review_component/Review";
import Hostelname from "./Component/Hostel_description_page/Ammenities_section/Hostelname";

function App() {
  return (
    <>
      <PhotoGallery />
      <Hostelname />
      <BrowserRouter>
        <StyleDiv className="box">
          <StyleDiv className="left_box">
            <Main />
            <StyledLine />
            <Pricing />
          </StyleDiv>

          <StyleDiv className="right_box">
            <Review />
          </StyleDiv>
        </StyleDiv>
      </BrowserRouter>
    </>
  );
}
export default App;
