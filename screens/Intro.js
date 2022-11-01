import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function Intro({ navigation }) {
  const startSwitchTimer = () => {
    setTimeout(() => {
      navigation.replace("Join");
    }, 100);
  };
  startSwitchTimer();
  return (
    <>
      <LottieView
        style={{
          height: 100,
          alignSelf: "center",
          marginBottom: 30,
          position: "absolute",
          height: "101%",
          width: "101%",
          opacity: 0.7,
        }}
        source={require("../assets/animations/join-background.json")}
        autoPlay
        speed={1}
        loop={false}
      />
      <View
        style={{
          backgroundColor: "black",
          position: "absolute",
          opacity: 0.6,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          zIndex: 999,
        }}
      >
        <LottieView
          style={{ height: 200 }}
          source={require("../assets/animations/loading-utensils.json")}
          autoPlay
          speed={0.5}
        />
      </View>
    </>
  );
}
