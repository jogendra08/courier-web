import React from 'react'

const regulatory = () => {
  return (
    <>
      <div>
        <img src={require('./images/boxes.jpg')} className='img-fluid' alt='home img' />
      </div>
      <div className='container'>
        <h1 className="my-3">Regulatory</h1>
        <div className='container'>
            <ol className="list-group " >
             
              <li className="list-group-item"><h6>While booking consignments through Bhati Courier , We request our customers to adhere to all terms and condition mentioned below.</h6></li>
              <li className="list-group-item">Consignor ( with name, address, ph number)</li>
              <li className="list-group-item">Consignee ( with name, address, ph number)</li>
              <li className="list-group-item">Origin ( place of booking ) / Destination ( place of delivery )</li>
              <li className="list-group-item">Dox / Non-Dox/ Samples. / Number of pieces.</li>
              <li className="list-group-item">Mode of transport. ( Air/ Train/ Surface )</li>
              <li className="list-group-item">Contents /Weight of the consignment.</li>
              <li className="list-group-item">Value of consignment. Insurance ( If the value is above Rs. 1000/- )</li>
              <li className="list-group-item">Invoice, Declaration and relevant sales tax form should be attached for the commercial shipments. All samples and valuable shipments excluding documents will be accepted in open condition. Consignments without mentioned value and senders signature will be deemed to be considered as dox.</li>
              <li className="list-group-item">In no event, Bhati Courier shall be responsible for any loss or damage either directly or indirectly, incidentally, consequentlly or otherwise, arising out of access or use or dissemination of information contained on our website, including, but not limited to, loss of profits, data, or damage to users computer systems or to any individual or entity.</li>
              <li className="list-group-item">The informations, contents, names, images etc may be changed, modified, updated and/or improved from time-to-time without notice at the sole discretion of Bhati Courier.</li>
              <li className="list-group-item">By accessing this website, the user accepts to the following:</li>
              <li className="list-group-item">That the information contained in the website shall not be treated as legal or professional information or advise.</li>
              
            </ol>
          
        </div>
      </div>
    </>
  )
}

export default regulatory
