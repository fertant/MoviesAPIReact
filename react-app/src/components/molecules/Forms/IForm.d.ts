export interface ISelectValue {
  value: string,
  label: string,
}

export interface IMovieValues {
  movieId?: number,
  title: string,
  releaseDate: string,
  movieUrl?: string,
  genre: Array<ISelectValue>,
  overview: string,
  runtime: string,
}
