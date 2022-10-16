import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function HeaderTab(props) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <HeaderTitle title={props.title} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <HeaderButton text="?" />
          <HeaderButton text="S" />
        </View>
      </View>
      {/*<BorderLine />*/}
    </View>
  );
}

const HeaderTitle = (props) => (
  <View>
    <Text
      style={{
        fontWeight: "900",
      }}
    >
      {props.title}
    </Text>
  </View>
);

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: "#f5f5f5",
        paddingVertical: 6,
        paddingHorizontal: 6,
        borderRadius: 30,
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: "900" }}>{props.text}</Text>
    </TouchableOpacity>
  </View>
);

const BorderLine = () => (
  <View
    style={{
      borderBottomColor: "#f5f5f5",
      borderBottomWidth: 1,
    }}
  />
);
