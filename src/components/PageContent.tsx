import React, { useEffect, useRef, useState } from "react";
import { Direction, SectionList, Sections } from "./types";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Achievements from "./Achievements";

interface PageContentProps {
  activeSection: Sections;
}

const PageContent: React.FC<PageContentProps> = ({ activeSection }) => {
  const [currentSection, setCurrentSection] = useState<Sections>(activeSection);
  const [nextSection, setNextSection] = useState<Sections | null>(null);
  const sectionOne = useRef<HTMLDivElement>(null);
  const sectionTwo = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef<Boolean>(true);
  const [currentRef, setCurrentRef] =
    useState<React.RefObject<HTMLDivElement>>(sectionOne);

  const handleAnimationEnd = () => {
    setCurrentSection(activeSection);
    setNextSection(null);
    currentRef.current?.classList.remove("rotate-cube-r");
    if (currentRef === sectionOne) {
      sectionOne.current?.classList.remove("z-9", "z-10");
      sectionTwo.current?.classList.remove("appear-cube-face-l");
      sectionTwo.current?.classList.add("z-10");
      setCurrentRef(sectionTwo);
    } else {
      sectionTwo.current?.classList.remove("z-9", "z-10");
      sectionOne.current?.classList.remove("appear-cube-face-l");
      sectionOne.current?.classList.add("z-10");
      setCurrentRef(sectionOne);
    }
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      setNextSection(activeSection);
      const direction: Direction =
        SectionList[currentSection].index > SectionList[activeSection].index
          ? "r"
          : "l";
      currentRef.current?.classList.add("rotate-cube-r", "z-9");
      if (currentRef === sectionOne) {
        sectionTwo.current?.classList.add("appear-cube-face-l", "z-10");
      } else {
        sectionOne.current?.classList.add("appear-cube-face-l", "z-10");
      }
    }
  }, [activeSection]);
  return (
    <div
      className={`section-container h-full flex flex-row w-screen z-15 bg-purple-100`}
    >
      <div
        ref={sectionOne}
        className={"h-full w-screen section z-9"}
        onAnimationEnd={
          currentRef === sectionOne ? handleAnimationEnd : () => {}
        }
      >
        {currentRef === sectionOne
          ? {
              [Sections.ABOUT]: <About />,
              [Sections.EDUCATION]: <Education />,
              [Sections.EXPERIENCE]: <Experience />,
              [Sections.ACHIEVEMNTS]: <Achievements />
            }[currentSection]
          : nextSection
          ? {
              [Sections.ABOUT]: <About />,
              [Sections.EDUCATION]: <Education />,
              [Sections.EXPERIENCE]: <Experience />,
              [Sections.ACHIEVEMNTS]: <Achievements />
            }[nextSection]
          : ""}
      </div>
      <div
        ref={sectionTwo}
        className={`h-full w-screen section`}
        onAnimationEnd={
          currentRef === sectionTwo ? handleAnimationEnd : () => {}
        }
      >
        {currentRef === sectionTwo
          ? {
              [Sections.ABOUT]: <About />,
              [Sections.EDUCATION]: <Education />,
              [Sections.EXPERIENCE]: <Experience />,
              [Sections.ACHIEVEMNTS]: <Achievements />
            }[currentSection]
          : nextSection
          ? {
              [Sections.ABOUT]: <About />,
              [Sections.EDUCATION]: <Education />,
              [Sections.EXPERIENCE]: <Experience />,
              [Sections.ACHIEVEMNTS]: <Achievements />
            }[nextSection]
          : ""}
      </div>
    </div>
  );
};

export default PageContent;
