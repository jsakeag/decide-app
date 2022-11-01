import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import { ChoiceIcon } from "../general/Buttons";
import * as Sharing from "expo-sharing";

export default function Invite() {
  const styles = StyleSheet.create({
    headerText: {
      color: "white",
      fontWeight: "700",
      fontSize: 45,
    },
    qrCode: {
      marginTop: 30,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const code = useSelector((state) => state.optionReducer.code);

  //sharing shares a file, this isn't what we need but I'll keep this temporarily
  const share = () => Sharing.shareAsync("").catch((err) => console.log(err));

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <QRCode value={code} size={200} style={styles.qrCode} />
        <View style={{ right: -55, top: 80, position: "absolute" }}>
          <ChoiceIcon icon="share" color="#99d7fe" onPress={share} />
        </View>
      </View>

      <Text style={styles.headerText}>{code}</Text>
    </View>
  );
}
