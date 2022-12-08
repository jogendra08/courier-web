import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactUs = () => {
  return (
    <>
      <div className='container' style={{ marginTop: '40px' }}>
        <div className="row" style={{ margin: '20px 0' }}>
          <div className="col-sm-4" style={{ margin: '20px 0' }}>
            <div className="card">
              <div className="card-body">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                <p className="card-text">9414320965 , 7742680702</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ margin: '20px 0' }}>
            <div className="card">
              <div className="card-body">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <p className="card-text">jogendrasinghbhati96870@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4" style={{ margin: '20px 0' }}>
            <div className="card">
              <div className="card-body">
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                <p>shop no. 2 Gulab Bhawan, near Sanicharthan, 1st Chopasani Road, jodhpur</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container' style={{ marginTop: '40px' }}>
        {/* <div className='card' style={{paddingLeft:"30px",paddingRight:"30px"}}> */}
          <div className='cardBody'>
            <div className='contactForm ' style={{ marginTop: '50px' }}>
              <div className='row'>
                <div class="col-sm-4 mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                </div>
                <div class="col-sm-4 mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                </div>
                <div class="col-sm-4 mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="phone number" />
                </div>
              </div>
              <div class=" mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" cols="30" rows="10"></textarea>
              </div>
              <div className='submitButton' style={{textAlign:"left", paddingBottom:"30px"}}>
                <div className=''>
                  <button type="button" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default ContactUs
