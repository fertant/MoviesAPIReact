export interface IThemeProps {
  active: string;
  theme: any;
}
  
export interface IMenuItem {
  title: string;
}

export interface INavigation {
  filters: Array<IMenuItem>
}
