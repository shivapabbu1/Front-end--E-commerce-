import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {FiAlignJustify} from "react-icons/fi"

const Header = () => {
  return (
    <>
 <nav className="navbar navbar-expand-lg  navbar-expand-md bg-body-tertiary">
 <Link className="navbar-brand" to="/"> Ecommerce-Store</Link>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><FiAlignJustify/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 ms-2 d-inline-block" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link className="dropdown-item text-black" to="/all">All</Link></li>
                  <li><Link className="dropdown-item text-black" to="/ipad">Ipad</Link></li>
                  <li><Link className="dropdown-item text-black" to="/mobiles">Mobiles</Link></li>
                  <li><Link className="dropdown-item text-black" to="/macbook">MacBook</Link></li>
                  <li><Link className="dropdown-item text-black" to="/laptop">Laptop</Link></li>
                  <li><Link className="dropdown-item text-black" to="/accessories">Accessories</Link></li>
                  <li><Link className="dropdown-item text-black" to="/tv">Televisions</Link></li>
                </ul>
              </div>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Cart</NavLink>
        </li>
        {/* <li>
          <NavLink to="/logout" className="nav-link">Logout</NavLink>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    <header className='header-top'>
      <div className='header-container'>
        <div className='row align-items-center'>
          <div className='col-12'>
            <p className='text-white mb-0 text-align-center py-1'>
            <marquee direction="right" behavior="alternate">Grab Ur Deals at low cost for this Festive Season..</marquee>
            </p>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header