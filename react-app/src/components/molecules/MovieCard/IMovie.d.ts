export interface IMovieEditState {
  editOpened: boolean,
  theme: any,
}

export interface IMovie {
  id: number,
  title: string,
  subtitle: string,
  description: string,
  rate?: number,
  duration: number,
  img?: string,
  yearOfRelease: string,
  genre: Array<string>,
}

export interface IMovieProps {
  item: IMovie,
}
