import { View, Text } from "react-native";
import React from "react";

export default function HomeText() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center" }}>
        search for restaurants then suggest them by pressing the checkbox!
      </Text>
    </View>
  );
}

//(invite people here or join by messages)
