import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href='https://www.linkedin.com/in/kiran-yadav-8251041a3/' target="_blank" rel="noreferrer"> <BsLinkedin/></a>
      <a href='https://github.com/kiranyadav10' target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href='https://dribbble.com/Sunray10' target="_blank" rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocial