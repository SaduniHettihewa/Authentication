import React from "react";
import Login from "../screens/login";
import Home from "../screens/home";

const RootStack = createStackNavigator();
const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    
    <RootStack.Screen name="Login" component={Login} />
    
    <RootStack.Screen name="home" component={Home} />
 
 
  </RootStack.Navigator>
);

export default RootStackScreen;
