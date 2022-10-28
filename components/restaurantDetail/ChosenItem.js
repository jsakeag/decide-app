import React from "react";
import { View, Text } from "react-native";

export default function ChosenItem({ item }) {
  const { id, name, price, rating, reviews } = item;
  const user = "You";
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{name}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{user}</Text>
    </View>
  );
}
