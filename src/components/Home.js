import React from 'react'
const Home = () => {
 

  return (
    <div>
      <div>
        <img src={require('./images/couriercartoon.png')} className='img-fluid' alt='home img' />
      </div>
      {/* <div className='container'> */}
      <div className='about' style={{margin:'20px 0'}}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='content'>
                <h3>WELCOME</h3>
                <p>
                BHATI AIR COURIER SERVICE is one of the leading Indian courier and logistics company providing services for more than two decades. Since the foundation in the year ....., headquartered at Jaipur,  we have surmounted all initial impediments and have flourished to delineate an indelible mark in the area of our operation. We have built up a reputation of being efficient, prompt and courteous courier company over this period of time. 	
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='content'>
                <h3>WHAT WE DO</h3>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='content'>
                <h3>OUR VISION</h3>
                <p>
                In today's business big or small , domestic or global, the value of time is clearly immense.  Our team of employees all over India renders personalized service to customer with extra care. We have a team of dedicated customer service professionals working 24/7 who will assist you with the bare minimum paper work, be it for couriering any thing form India or any kind of imports from any part of the world and deliver at your door step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
      <div className="row" style={{margin:'20px 0',padding:'50px'}}>
        <div className="col-sm-4" style={{margin:'20px 0'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">200+</h5>
              <p className="card-text">clints</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4" style={{margin:'20px 0'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">20+</h5>
              <p className="card-text">offices</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4" style={{margin:'20px 0'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">200+</h5>
              <p className="card-text">locations</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4" style={{margin:'20px 0'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">150+</h5>
              <p className="card-text">vehicles</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4" style={{margin:'20px 0'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">100+</h5>
              <p className="card-text">employees</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4" style={{margin:'20px 0'}}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">10000+</h5>
              <p className="card-text">customer</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home;