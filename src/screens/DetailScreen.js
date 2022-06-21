import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addOrRemoveFav, fetchPokeDetail} from '../redux/pokeSlice';

export default function DetailScreen({route}) {
  const {id} = route.params;
  const dispatch = useDispatch();
  const {detail, status, data} = useSelector(state => state.poke);

  useEffect(() => {
    dispatch(fetchPokeDetail(id));
  }, []);

  return (
    <View style={styles.container}>
      {status !== 'failed' ? (
        <View style={{paddingHorizontal: 10}}>
          <View style={styles.center}>
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
              }}
              style={{width: 150, height: 150, resizeMode: 'cover'}}
            />
            <Pressable
              onPress={() => dispatch(addOrRemoveFav(detail.name))}
              style={{
                backgroundColor: 'red',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text style={{color: 'white'}}>
                {data.find(item => item.name == detail?.name)?.favorite
                  ? 'Remove Favorite'
                  : 'Add Favorite'}
              </Text>
            </Pressable>
          </View>
          <Text>Name: {detail?.name}</Text>
          <Text>Base Experience: {detail?.base_experience}</Text>
          <Text>Height: {detail?.height}</Text>
        </View>
      ) : (
        <Text>Terjadi Kesalahan server</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
