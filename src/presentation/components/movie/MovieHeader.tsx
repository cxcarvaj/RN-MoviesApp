import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/StackNavigator.tsx';
interface Props {
  // movie: FullMovie;
  poster: string;
  originalTitle: string;
  title: string;
}
export const MovieHeader = ({poster, originalTitle, title}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const {height: screenHeight} = useWindowDimensions();
  return (
    <>
      <View style={{...styles.imageContainer, height: screenHeight * 0.7}}>
        <View style={styles.imageBorder}>
          <Image style={styles.posterImage} source={{uri: poster}} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{originalTitle}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.backButton}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 35,
    left: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
