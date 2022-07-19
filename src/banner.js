import React from 'react'
import banner_images from './images/banner-img.png'
import banner_images1 from './images/banner-img1.png'
import banner_images3 from './images/blue-Line.png'
import {
   
  Link
} from "react-router-dom";

const Banner = () => {
  return (
    <div>
          <div className="banner" style={{ backgroundImage: `url(${banner_images3})` }}
  //          style="background-image: url(blue-Line.png) !important; background-image: url(blue-Line.png) !important;
  //  background-repeat: no-repeat;
  //  background-size: cover;
 
  //  background-position: center;"
   
   >
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-2">
          <div className="banner-img">
            <img src={banner_images} alt="" />
          </div>
        </div>
        <div className="col-lg-5">
          <div className="banner-content">
            <h1 className="banner-hd" style={{fontFamily: "myFirstsFont"}}>5000 Kidz Released<br />
              into the Wimpyverse </h1>
         
            <p className="banner-para" style={{fontFamily: "myFirstsFont"}}>0/5000 Minted<br />Mint date: TBA
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="banner-btn">
                <a href="#" className="banner-btn" style={{fontFamily: "myFirstsFont"}}>Mint Coming Soon</a>
              </div>
      
            </div>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="banner-img1">
            <img src={banner_images1} alt="" />
          </div>
        </div>
      </div>

    </div>
  </div>
    </div>
  )
}

export default Banner