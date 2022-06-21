import React from 'react';
import {View, Text} from 'react-native';
import Routers from './src/routers';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}
