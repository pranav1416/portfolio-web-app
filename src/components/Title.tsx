import React from "react";
import { Helmet } from "react-helmet";

interface TitleProps {
  title: string;
}
const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <link rel='canonical' href='http://mysite.com/example' />
    </Helmet>
  );
};

export default Title;
