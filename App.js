import { View, Text } from "react-native";
import RootNavigation from "./navigation";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return <RootNavigation />;
}
