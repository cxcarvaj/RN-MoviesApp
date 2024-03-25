import React from 'react';
import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies.tsx';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel.tsx';
import {HorizontalCarouser} from '../../components/movies/HorizontalCarousel.tsx';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader.tsx';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <PosterCarousel movies={nowPlaying} />

        <HorizontalCarouser
          movies={popular}
          title={'Popular Movies'}
          loadNextPage={popularNextPage}
        />

        <HorizontalCarouser movies={topRated} title={'Top Rated Movies'} />

        <HorizontalCarouser movies={upcoming} title={'Upcoming Movies'} />
      </View>
    </ScrollView>
  );
};
