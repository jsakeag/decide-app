import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";
import ChoiceFound from "./screens/ChoiceFound";
import Join from "./screens/Join";
//import Search from "./screens/Search";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Join" screenOptions={screenOptions}>
          <Stack.Screen name="Join" component={Join} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="ChoiceFound" component={ChoiceFound} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
