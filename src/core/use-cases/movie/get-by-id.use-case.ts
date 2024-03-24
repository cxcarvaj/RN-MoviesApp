import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import type {FullMovie} from '../../entities/movie.entity.ts';
import {MovieDBMovie} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper.ts';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);

    return MovieMapper.fromMovieDBToEntity(movie);
  } catch (error) {
    throw new Error(
      `Error on getting movie by id use case - movie id: ${movieId}`,
    );
  }
};
