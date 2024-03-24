import React from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator.tsx';
import {useMovie} from '../../hooks/useMovie.tsx';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;

  const {} = useMovie(movieId);
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
};
