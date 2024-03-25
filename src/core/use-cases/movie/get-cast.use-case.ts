import {HttpAdapter} from '../../../config/adapters/http/http.adapter.ts';
import type {MovieDBCastResponse} from '../../../infrastructure/interfaces/movie-db.responses.ts';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper.ts';
import type {Cast} from '../../entities/cast.entity.ts';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(
      `/${movieId}/credits`,
    );

    const actors = cast.map(CastMapper.fromMovieDBCastToEntity);

    return actors;
  } catch (error) {
    throw new Error(`Cannot get move cast: ${movieId}`);
  }
};
