import React from 'react'

const Services = () => {
  return (
    <>
      <div>
        <img src={require('./images/boxes.jpg')} className='img-fluid' alt='home img' />
      </div>
      <div className='container'>
        <h1 className="my-3">Services</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <b>Domestic Delivery Solutions – Documents & Parcels:</b>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start">
                <div className="content">
                <p>
                  <b>Prime Track: </b>
                  We provide a guaranteed next or second business day delivery across all metros and cities in India for your valuable belongings.
                </p>
                <p>
                  <b> Express Standard:</b> We ensure express deliveries at an optimal cost through air, rail and road.
                </p>
                <p> <b> Air Express Cargo: </b>We offer an express delivery solution for shipments weighing more than 100 kgs across all metros and cities in India.</p>

                <p><b>Surface Express Cargo:</b> We offer an economical delivery solution for heavy shipments which requires special arrangements such as big vehicles and material handling equipment.</p>
              </div></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <b>Value Added Services (VAS):</b>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start">
                <p className="text-justify">
                  <b>Risk Cover/ Risk Surcharge: </b>
                  Our customers can opt for a risk cover for their consignment. It is like an insurance and covers the holder for the value of the shipment in case of any loss in transit or faulty packaging. We charge a non-refundable risk surcharge equivalent to 2% of the invoice value. Instances where the customer has insured the shipments on his own, a risk surcharge equivalent to 0.2% of the invoice is charged for the Certificate of Facts to fulfil requirements of the customer and take subsequent claims from their insurance company.
                </p>
                <p>
                  <b>ToPay:</b>
                  We provide ToPay facility to our contractual customers where we collect freight charges from the consignee/receiver instead of the consignor/sender.
                </p>

                <p>
                  <b> Cash on delivery / DOD: </b>
                  Customers can collect the value of their shipment from the consignee/receiver at the time of delivery.
                  This service can be clubbed with ToPay. We collect COD/DOD from the consignee/receiver and hand the same to the consignor/sender.
                  This provision is only available for our corporate / credit client.
                </p></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <b>Additional Services:</b>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body text-start">
                <p>
                  <b>  Reverse Pickup Solutions: </b> We provide hassle-free pickup facilities for corporates from their respective sellers/suppliers across Rajasthan.
                </p>
                <p>
                  <b> International Delivery Solutions: </b>  We provide delivery solutions across borders for documents and parcels.
                </p>
                <p className="text-justify">
                  <b> Integrated Mailroom Management Solutions:</b>
                  A comprehensive &amp; customized integrated business program for mailroom of a big corporate. Organisations may favour an on-site digital mailroom as it offers oversight and access. Services include on-site operations to cater privacy, document security, control and faster processing.
                </p></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;
