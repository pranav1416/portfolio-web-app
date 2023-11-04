import React, { useState } from "react";
import { Sections } from "./types";
import NavBar from "./NavBar";
import PageContent from "./PageContent";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Sections>(Sections.ABOUT);

  const handleChangeActiveSection = (selectedSection: Sections) => {
    setActiveSection(selectedSection);
  };

  return (
    <div className='flex flex-col h-screen w-full'>
      <NavBar
        activeSection={activeSection}
        onNavClick={handleChangeActiveSection}
      />
      <PageContent activeSection={activeSection} />
    </div>
  );
};

export default App;
