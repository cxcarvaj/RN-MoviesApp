import React from 'react';
import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies.tsx';

export const HomeScreen = () => {
  const {} = useMovies();
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};
