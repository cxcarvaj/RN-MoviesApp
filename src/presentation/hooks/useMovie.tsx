import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter..ts';
import type {FullMovie} from '../../core/entities/movie.entity.ts';
import type {Cast} from '../../core/entities/cast.entity.ts';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);

  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>([]);

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);

    const fullMoviePromise = UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );

    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovies, castList] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovies);
    setCast(castList);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
    cast,
  };
};
