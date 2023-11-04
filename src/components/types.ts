export enum Sections {
  ABOUT = "About",
  EDUCATION = "Education",
  EXPERIENCE = "Experience",
  ACHIEVEMNTS = "Achievements"
}

export type Section = {
  id: string;
  title: string;
  key: Sections;
  index: number;
};

export type Direction = "l" | "r";

export const SectionList: Record<Sections, Section> = {
  [Sections.ABOUT]: {
    id: "about",
    title: "Pranav Borole",
    key: Sections.ABOUT,
    index: 0
  },
  [Sections.EDUCATION]: {
    id: "education",
    title: "Qualifications",
    key: Sections.EDUCATION,
    index: 1
  },
  [Sections.EXPERIENCE]: {
    id: "experience",
    title: "Work Experiences",
    key: Sections.EXPERIENCE,
    index: 2
  },
  [Sections.ACHIEVEMNTS]: {
    id: "achievements",
    title: "Achievements",
    key: Sections.ACHIEVEMNTS,
    index: 3
  }
};
