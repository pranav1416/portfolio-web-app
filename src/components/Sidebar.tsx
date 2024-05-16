import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import githubIcon from '../images/icons/github.svg';
import linkedinIcon from '../images/icons/linkedin.svg';
import emailIcon from '../images/icons/google.svg';

const Sidebar = () => {
  const iconStyle = "text-gray-500 hover:text-blue-700 cursor-pointer";
  const hoverAnimation = {
    scale: 1.2,
    transition: { type: 'spring', stiffness: 300 }
  };

  return (
    <div className="fixed left-0 top-1/4 flex flex-col space-y-4 z-50">
      <motion.a href="https://github.com/pranav1416" target="_blank" className={iconStyle}
        whileHover={hoverAnimation}>
        {/* <FaGithub size="2em"/> */}
        <img src={githubIcon} alt="GitHub" className="h-8 w-8"/>
      </motion.a>
      <motion.a href="https://linkedin.com/in/pranavborole" target="_blank" className={iconStyle}
        whileHover={hoverAnimation}>
        {/* <FaLinkedinIn size="2em"/> */}
        <img src={linkedinIcon} alt="LinkedIn" className="h-8 w-8"/>
      </motion.a>
      <motion.a href="mailto:pranavborole14@gmail.com" className={iconStyle}
        whileHover={hoverAnimation}>
          <img src={emailIcon} alt="Email" className="h-8 w-8"/>
        {/* <FaEnvelope size="2em"/> */}
      </motion.a>
    </div>
  );
};

export default Sidebar;
