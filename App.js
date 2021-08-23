
import React from 'react';
import RootStack from "./Navigation/RootStack";
import { StyleSheet} from 'react-native';
import { NavigationContainer} from "@react-navigation/native";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    </>
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
