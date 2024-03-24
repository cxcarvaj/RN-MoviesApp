import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {MovieDBMoviesResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import type {Movie} from '../../entities/movie.entity.ts';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper.ts';

export const popularMoviesUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popularMovies = await fetcher.get<MovieDBMoviesResponse>('/popular');

    return popularMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - PopularUseCase');
  }
};
