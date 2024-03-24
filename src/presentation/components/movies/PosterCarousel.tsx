import React from 'react';
import {Text, View} from 'react-native';
import type {Movie} from '../../../core/entities/movie.entity.ts';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster.tsx';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({movies, height = 440}: Props) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map((movie: Movie) => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
