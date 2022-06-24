import React from 'react';
import {View, Text} from 'react-native';
import Routers from './src/routers';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  function hitung() {
    var list = [];
    const listAlpa = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];

    var split = 'saya makan nasi goreng'.split('');
    listAlpa.forEach(element => {
      var jumlah = 0;
      split.forEach(data => {
        if (element == data) {
          jumlah++;
        }
      });
      if (jumlah > 0) {
        list.push({[element]: jumlah});
      }
    });
    console.log(list);
  }
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}
