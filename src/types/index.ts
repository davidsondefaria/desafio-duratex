export interface INavBar {
  navButtons: INavButtons[];
  navbarOpen?: boolean;
}

export interface INavButtons {
  title: string;
  ref: string;
}

export interface ICard {
  title: string;
  image: string;
  description: string;
  date: string;
  link?: string;
}
