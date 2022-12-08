import React from 'react'
import {NavLink, useNavigate} from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        <img src={require('./images/BHATIAIR1.png')} className='img-fluid' alt='home img' style={{width:'80px', height:'60px'}} />
      </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/support" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Support
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
                <li><NavLink className="dropdown-item" to="/prohibiteditems">Prohibited Items</NavLink></li>
                <li><NavLink className="dropdown-item" to="/regulatory">Regulatory</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li><NavLink className="dropdown-item" to="/contactus">Contact Us</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/admin">Admin</NavLink>
            </li>
          </ul>
          {!localStorage.getItem('token')?<form className='d-flex'>
            <NavLink className="btn btn-primary mx-1" to="/login" role="button">Login</NavLink>
            <NavLink className="btn btn-primary mx-1" to="/singup" role="button">Singup</NavLink>
          </form>:<button onClick={handleLogout} className="btn btn-primary">Logout</button>}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
