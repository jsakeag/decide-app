import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";

export default function ChoiceFound() {
  const items = useSelector((state) => state.optionReducer.selectedItems.items);
  const chosenRestaurant = items[Math.floor(Math.random() * items.length)].name;
  const totalCount = items.length;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <LottieView
        style={{ height: 100, alignSelf: "center", marginBottom: 40 }}
        source={require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text>
        Your chosen restaurant is {chosenRestaurant} out of {totalCount}{" "}
        options!
      </Text>
    </SafeAreaView>
  );
}
