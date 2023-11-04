import { HeadFC } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Title from "./Title";

const About: React.FC = () => {
  return (
    <>
      <Title title='About' />
      <div className='h-full bg-purple-300'>
        <p>This is About me section</p>
      </div>
    </>
  );
};
export default About;

export const Head: HeadFC = () => <title>About</title>;
