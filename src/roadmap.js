import React from 'react'
import roadmap_imagees from './images/Wimpy-done.png'
const Roadmap = () => {
  return (
    <div>

          <section id="roadmap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="faq-hd text-center" style={{fontFamily: "myFirstsFont"}}>ROADMAP</h2>

          <div className="separator"></div>
          <p className="roadmap-para text-center" style={{fontFamily: "myFirstsFont"}}>As we value our community and its
            creativity, our roadmap will be updated according to your comments and ideas.</p>
           
     
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="roadmap-img">
            <img src={roadmap_imagees}  alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Roadmap