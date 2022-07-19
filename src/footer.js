import React from 'react';
import './css/style.css'
import footer_images from './images/footer1.png'
function Footer() {
    return (
        <div>
           <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div class="footer-img">
            <img src={footer_images} alt="" />
          </div>
        </div>
      </div>
    </div>
  </footer>
        </div>
    )
}
export default Footer;
