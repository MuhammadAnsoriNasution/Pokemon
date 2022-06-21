import React, {useCallback, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPoke} from '../redux/pokeSlice';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.poke);
  useEffect(() => {
    dispatch(fetchPoke());
  }, []);

  const renderItem = useCallback(({item}) => {
    const id = item.url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    return (
      <Pressable
        onPress={() => navigation.navigate('Detail', {id: id})}
        style={styles.card}>
        <Text>{item.name}</Text>
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
          }}
          style={{width: 100, height: 100, resizeMode: 'cover'}}
        />
      </Pressable>
    );
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: '30.7%',
    flexDirection: 'column',
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
