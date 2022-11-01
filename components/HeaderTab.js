import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChoiceIcon } from "./general/Buttons";

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
          <ChoiceIcon
            icon="account-plus"
            color="#fcbaaa"
            size={30}
            sideMargins={0}
          />
          <ChoiceIcon icon="help" color="#fcbaaa" size={30} sideMargins={1} />
          <ChoiceIcon icon="cog" color="#fcbaaa" size={30} sideMargins={0} />
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

const BorderLine = () => (
  <View
    style={{
      borderBottomColor: "#f5f5f5",
      borderBottomWidth: 1,
    }}
  />
);
