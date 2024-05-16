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
  span: string;
};

export type Direction = "l" | "r";

export const SectionList: Record<Sections, Section> = {
  [Sections.ABOUT]: {
    id: "about",
    title: "Pranav Borole",
    key: Sections.ABOUT,
    index: 0,
    span: '1/2'
  },
  [Sections.EDUCATION]: {
    id: "education",
    title: "Qualifications",
    key: Sections.EDUCATION,
    index: 1,
    span: '1/3'
  },
  [Sections.EXPERIENCE]: {
    id: "experience",
    title: "Work Experiences",
    key: Sections.EXPERIENCE,
    index: 2,
    span: '1/3'
  },
  [Sections.ACHIEVEMNTS]: {
    id: "achievements",
    title: "Achievements",
    key: Sections.ACHIEVEMNTS,
    index: 3,
    span: '1/3'
  }
};
