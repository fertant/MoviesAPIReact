export interface IMovieApi {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  vote_average: number;
  runtime: number;
  poster_path: string;
  release_date: number;
  genres: Array<string>
}
