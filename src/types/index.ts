export interface INavBar {
  navButtons: INavButtons[];
  navbarOpen?: boolean;
}

export interface INavButtons {
  title: string;
  ref: string;
}
