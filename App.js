
import React from 'react';

import { StyleSheet, Text, View} from 'react-native';

import Login from "./screens/login"

export default function App() {
  return (
  <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
