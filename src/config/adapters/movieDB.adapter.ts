import {AxiosAdapter} from './http/axios.adapter.ts';
import {THE_MOVIE_DB_API_KEY} from '@env';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: THE_MOVIE_DB_API_KEY ?? 'no-key',
    language: 'en',
  },
});
