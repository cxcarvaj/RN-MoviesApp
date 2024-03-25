import React from 'react';
import {Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/StackNavigator.tsx';
import {useMovie} from '../../hooks/useMovie.tsx';
import {MovieHeader} from '../../components/movie/MovieHeader.tsx';
import {MovieDetails} from '../../components/movie/MovieDetails.tsx';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;

  const {isLoading, movie, cast} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <MovieHeader
        title={movie!.title}
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
      />

      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
