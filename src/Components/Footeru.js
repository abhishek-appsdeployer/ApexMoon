import React from 'react'
import "./Footeru.css"

const Footeru = () => {
  return (
    <div className='mx-5'>
    <div className="text-center bgape my-5">
        <img className='wia img-fluid' src="https://apexmoon.com/img/apex-moon-logo.svg" alt="" />
    </div>
    {/* <div className='d-flex flex-wrap flex-md-row flex-column gap-5 justify-content-center'>
    <div>
        <h5>Buy Dominos</h5>
        <p>Past Sales</p>
        <p>About Us</p>
    </div>
    <div>
        <h5>Buy Dominos</h5>
        <p>Past Sales</p>
        <p>About Us</p>
    </div>
    <div>
        <h5>Buy Dominos</h5>
        <p>Past Sales</p>
        <p>About Us</p>
    </div>
    <div>
        <h5>Proud Partners</h5>
        <img src="https://secureapi.escrow.com/api/ecart/Content/Images/Affiliate%20Banners/banner-125x125.gif
        " alt="" />
          <img src="https://secureapi.escrow.com/api/ecart/Content/Images/Affiliate%20Banners/banner-125x125.gif
        " alt="" />
        
    </div>

    </div> */}
    <div className="row">
        <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
        <h6>Buy Dominos</h6>
        <h6>Past Sales</h6>
        <h6>Past Sales</h6>
        <h6>Past Sales</h6>


        </div>
        <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
        <h6>Services</h6>
        <p>Domain brokerage</p>
        <p>Domain brokerage</p>
        <p>Domain brokerage</p>
        <p>Domain brokerage</p>


        </div>
        <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
       <h6>Contact Us</h6>
       <p><strong>Email:</strong>abhishek2019kr@gmail.com</p>
       <p><strong>Phone:</strong>63459202</p>
       <p><strong>Skype:</strong>abhishek2019kr@gmail.com</p>
       <p><strong>Follow Us</strong>abhishek2019kr@gmail.com</p>


        </div>
        <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
        <h6>Proud partners</h6>
        <img src="https://secureapi.escrow.com/api/ecart/Content/Images/Affiliate%20Banners/banner-125x125.gif
        " alt="" />
          <img src="https://secureapi.escrow.com/api/ecart/Content/Images/Affiliate%20Banners/banner-125x125.gif
        " alt="" />


        </div>
    </div>
      
    </div>
  )
}

export default Footeru