import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/home";
import Details from "./screens/details";

const Stack = createStackNavigator();

const App = () => {
  return(<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Details" component={Details}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>);
}

export default App;