export interface NowPlayingResponse {
  dates: Dates;
  page: number;
  results: Result[];
  total_page: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
}
