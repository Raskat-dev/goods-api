export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export class TopPageModel {
  firstLevelCategory: TopLevelCategory;
  secondLevelCategory: string;
  title: string;
  category: string;
  hh?: {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSanary: number;
  };
  advantages: {
    title: string;
    description: string;
  }[];
  seoTest: string;
  skillsTitle: string;
  skillTags: string[];
}
