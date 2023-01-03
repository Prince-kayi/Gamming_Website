import React from 'react'
import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"
import "../bottom/footer.css"

const Footer = () => {
  return (
    <div className='footers'>
      <footer>
  <p className='text'>Game Station</p>
  <br/>
  <p>For more information about gameZone.Please click the link below</p>
<div className='social-media'>
 <Link to="#"><FaFacebook/></Link>
 <Link to="#"><FaLinkedin/></Link>
 <Link to="#"><FaTwitter/></Link>
 <Link to="#"><FaInstagram/></Link>
 <Link to="#"><FaYoutube/></Link>
 </div>
 <p className='down'>CopyRight by kayi</p>
 </footer>
      
    </div>
  )
}
export default Footer
