import React from 'react'
import "./Footer.css";
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedinIn} from "react-icons/fa";
import sunray from "../../assests/sunray.png"

const Footer = () => {
  return (
    <footer>
        <div className="footer__socials">
          <a href="https://github.com/kiranyadav10"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/kiran-yadav-8251041a3/"><FaLinkedinIn/></a>
          <a href="https://www.instagram.com/er_yk_102/"><FaInstagram/></a>
        </div>

        <div className="footer__copyright">
          <small>  &copy; Er_YK. All rights reserved.</small>
        </div>
        <div className='footerLogo'>
           <a href="#">
          <img src={sunray} alt="" className='logo' />
          </a>
        </div>

      
    
    </footer>
  )
}

export default Footer