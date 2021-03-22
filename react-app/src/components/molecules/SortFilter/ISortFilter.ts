export interface IElementStatusProps {
  status: boolean
}

export interface ISelectItem {
  key: string;
  value: string;
}

export interface ISelectProps {
  label: string;
  items: Array<ISelectItem>;
  selected?: ISelectItem;
}
