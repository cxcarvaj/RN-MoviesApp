import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import type {Movie} from '../../entities/movie.entity.ts';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper.ts';

export const topRatedMoviesUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRatedMovies = await fetcher.get<NowPlayingResponse>('/top_rated');

    return topRatedMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - TopRatedUseCase');
  }
};
