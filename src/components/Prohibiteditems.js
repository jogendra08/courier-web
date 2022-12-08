import React from 'react'

const prohibiteditems = () => {
  return (
    <>
      <div>
        <div>
          <img src={require('./images/boxes.jpg')} className='img-fluid' alt='home img' />
        </div>
      </div>
      <div className='container'>
      <div className='pageContent'>
        <div className="row" style={{ margin: '20px 0' }}>
          <div className="col-sm-6" style={{ margin: '20px 0' }}>
            <div className='table1'>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Any type of liquid product</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Tobacco & tobacco products</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Fire arms & fire works</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Poultry, live stock, plants etc.</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Articles for cities not listed</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Banned skins / hides</td>
                  </tr>
                  <tr>
                    <th scope="col">7</th>
                    <td>Passports	</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-6" style={{ margin: '20px 0' }}>
            <div className='table1'>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Items</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">8</th>
                    <td>Temperature sensitive goods</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Money (cash & cash equivalent instruments in bearer form)</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Drugs & alcoholic beverages</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Antiques / art works</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Gold, silver, diamonds, precious stones or articles made of these</td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td>Share certificates & lottery tickets</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td>Any other item which is dangerous to carry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default prohibiteditems
