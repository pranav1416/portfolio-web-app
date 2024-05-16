import React, { useState } from "react";
import { Direction, SectionList, Sections } from "./types";
import NavBar from "./NavBar";
import PageContent from "./PageContent";
import Sidebar from "./Sidebar";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Sections>(Sections.ABOUT);
  const [direction, setDirection] = useState<Direction>("r");
  const handleChangeActiveSection = (selectedSection: Sections) => {
    const calcDirection: Direction =
      SectionList[activeSection].index > SectionList[selectedSection].index
        ? "l"
        : "r";
    setDirection(calcDirection);
    setActiveSection(selectedSection);
  };

  return (
    <div className='flex flex-col h-screen w-full'>
      <NavBar
        activeSection={activeSection}
        onNavClick={handleChangeActiveSection}
      />
      <Sidebar/>
      <PageContent activeSection={activeSection} direction={direction} />
    </div>
  );
};

export default App;
