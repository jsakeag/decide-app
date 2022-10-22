import { View, Text } from "react-native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import Search from "./screens/Search";
import Suggest from "./screens/Suggest";
import Test from "./screens/Test";

export default function App() {
  return (
    <Text style={{ textAlign: "center" }}>
      tap anywhere to create a suggestion room! (invite people here or join by
      messages)
    </Text>
  );
}
