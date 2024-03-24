import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import type {Movie} from '../../entities/movie.entity.ts';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper.ts';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlayingMovies = await fetcher.get<NowPlayingResponse>(
      '/now_playing',
    );

    return nowPlayingMovies.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching movies - NowPlaying');
  }
};
