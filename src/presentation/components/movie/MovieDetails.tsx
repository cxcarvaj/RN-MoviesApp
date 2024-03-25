import React from 'react';
import {Text, View} from 'react-native';
import type {FullMovie} from '../../../core/entities/movie.entity.ts';
import {Formatter} from '../../../config/helpers/formatter.ts';

interface Props {
  movie: FullMovie;
}

export const MovieDetails = ({movie}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}>
            -{' '}
            {movie.genres.reduce((previousValue, currentValue, index) => {
              return (
                previousValue +
                (index === movie.genres.length - 1 ? ' and ' : ', ') +
                currentValue
              );
            })}
          </Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          History
        </Text>
        <Text style={{fontSize: 16}}>{movie.description}</Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>
          Budget
        </Text>

        <Text style={{fontSize: 18}}>{Formatter.currency(movie.budget)}</Text>
      </View>

      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actors / Actress
        </Text>
      </View>
    </>
  );
};
