import {AxiosAdapter} from './http/axios.adapter.ts';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '',
    language: 'en',
  },
});
