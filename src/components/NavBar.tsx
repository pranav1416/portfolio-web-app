import React from "react";
import { Section, SectionList, Sections } from "./types";

interface NavBarProps {
  activeSection: Sections;
  onNavClick: (section: Sections) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onNavClick }) => {
  return (
    <nav className='top-0 left-0 w-full bg-gray-100 z-5'>
      <ul className='flex justify-around p-4'>
        {Object.values(SectionList).map((section) => (
          <li
            key={section.id}
            className={activeSection === section.key ? "active" : ""}
          >
            <button onClick={() => onNavClick(section.key)}>
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
