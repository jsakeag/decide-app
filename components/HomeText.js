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
        tap anywhere to create a suggestion room! (invite people here or join by
        messages)
      </Text>
    </View>
  );
}
