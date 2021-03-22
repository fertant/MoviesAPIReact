export interface IMovieEditState {
  editOpened: boolean;
  theme: any;
}

export interface IMovie {
  id: number;
  title: string;
  img?: string;
  yearOfRelease: number;
  genre: Array<string>
}

export interface IMovieProps {
  item: IMovie;
}
