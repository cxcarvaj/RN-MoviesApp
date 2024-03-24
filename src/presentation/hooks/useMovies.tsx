import {useEffect, useState} from 'react';
import type {Movie} from '../../core/entities/movie.entity.ts';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter..ts';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>();
  const [upcoming, setUpcoming] = useState<Movie[]>();

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMoviesPromise =
      UseCases.nowPlayingMoviesUseCase(movieDBFetcher);

    const popularMoviesPromise = UseCases.popularMoviesUseCase(movieDBFetcher);

    const topRatedMoviesPromise =
      UseCases.topRatedMoviesUseCase(movieDBFetcher);

    const upcomingMoviesPromise =
      UseCases.upcomingMoviesUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingMoviesPromise,
        popularMoviesPromise,
        topRatedMoviesPromise,
        upcomingMoviesPromise,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
  };
};
