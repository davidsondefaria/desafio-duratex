export interface INavBar {
  navButtons: INavButtons[];
  navbarOpen?: boolean;
}

export interface INavButtons {
  title: string;
  ref: string;
}

interface IBlog {
  title: string;
  image: string;
  date: string;
}

export interface ICard extends IBlog {
  description: string;
  link?: string;
}

export interface IArticle extends IBlog {
  content: any;
}

export interface DynamicPage {
  params: { slug: string };
}
