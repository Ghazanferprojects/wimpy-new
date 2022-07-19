import React from 'react';
// import { Link } from 'react-router-dom';


const Headeer = () => {
  return (
    <div>
    {/* <h1>hello</h1> */}
          
      <header>
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-3">
          <div className="nav-item">

            <ul className="list-item d-flex">

              <li><a href="#"  style={{fontFamily: "myFirstsFont"}}>Home</a></li>

              <li><a href="#" style={{fontFamily: "myFirstsFont"}}>Roadmap</a></li>
              {/* <li><a href="#" style={{fontFamily: "myFirstsFont"}}>Team</a></li> */}
              <li><a href="#" style={{fontFamily: "myFirstsFont"}}>FAQ</a></li>
            </ul>
          </div>
     
            
               
        </div>
        <div className="col-lg-4">
          <div className="d-flex" id="navigate">
            <div className="connect-btn">
              <a href="#" className="connect-Wallet" style={{fontFamily: "myFirstsFont"}}>Connect Wallet</a>
            </div>

            <div className="d-flex">
              <a href="#"> <i className="fab fa-twitter"></i></a>
              <a href="#"> <i className="fab fa-discord"></i></a>
            </div>

          </div>

        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Headeer;




