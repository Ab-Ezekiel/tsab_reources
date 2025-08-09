import React from 'react'
import "./Logo.css"
import { logo } from "../../assets"
import { Link } from 'react-scroll'


const Logo = () => {
  return (
    <div className='logo'>
        <Link to="/" className="icon_container">
          <img src={logo} alt="" />
        </Link>
        <h1 className='title'>Tsab Resources  <span className='g-text'>Global Limited</span></h1>
    </div>
  )
}

export default Logo