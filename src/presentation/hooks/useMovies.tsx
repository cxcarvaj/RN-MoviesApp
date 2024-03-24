import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entity.ts';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter..ts';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );

    setNowPlaying(nowPlayingMovies);
  };

  return {
    isLoading,
    nowPlaying,
  };
};
