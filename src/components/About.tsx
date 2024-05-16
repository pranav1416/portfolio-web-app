import { HeadFC } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Title from "./Title";
import { motion } from "framer-motion";
import headshot from '../images/headshot.png';

const About: React.FC = () => {
  return (
    <div className="h-full">
      <Title title='About' />
      <div className='h-screen about-page flex flex-col'>
        <div className='flex flex-row flex-grow w-full h-screen'>
          <div className='flex flex-col w-1/2 text-center font-extrabold justify-start items-center mt-64'>
            <motion.h1
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              className="text-5xl font-bold mb-4"
            >
              Pranav Borole
            </motion.h1>
            <motion.p
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
              className="text-xl"
            >
              Passionate about technology and innovation, I specialize in building robust backend systems and sleek, user-friendly frontends. As a versatile software engineer, I thrive on tackling new challenges and pushing boundaries in product development. Let's collaborate and create something remarkable together!
            </motion.p>
          </div>
          <div className='flex flex-col w-1/2 h-full justify-start items-center mt-20'>
            <motion.img 
              src={headshot} 
              alt="Headshot" 
              loading="lazy"
              className="rounded-full w-60  h-auto mr-40 mb-56"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
        </div>

      </div>
      {/* WHAT I DO */}
      
      <div className='flex flex-col w-full h-screen'>
        <div className="flex flex-col w-1/2 text-center text-4xl font-extrabold justify-start items-center">
          What I do?
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};
export default About;

export const Head: HeadFC = () => (
  <>
    <Helmet>
      <title>About Pranav</title>
      <meta name="description" content="Learn more about Pranav Borole, his skills, experiences, and projects." />
      <meta property="og:title" content="About Pranav" />
      <meta property="og:description" content="Learn more about Pranav Borole, his skills, experiences, and projects." />
      <meta property="og:image" content={headshot} />
      <meta property="og:type" content="website" />
    </Helmet>
  </>
);