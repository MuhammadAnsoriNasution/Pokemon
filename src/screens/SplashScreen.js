import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {pokemonImage} from '../assets/images';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={pokemonImage}
        style={{width: 200, height: 70, resizeMode: 'contain'}}
      />
      <Text>Selamat Datang</Text>
    </View>
  );
}
