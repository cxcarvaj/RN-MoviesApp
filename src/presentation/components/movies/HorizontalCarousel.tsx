import React from 'react';
import {FlatList, Text, View} from 'react-native';
import type {Movie} from '../../../core/entities/movie.entity.ts';
import {MoviePoster} from './MoviePoster.tsx';

interface Props {
  movies: Movie[];
  title?: string;
}

export const HorizontalCarouser = ({movies, title}: Props) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
