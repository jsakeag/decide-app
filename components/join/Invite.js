import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import { ChoiceIcon } from "../general/Buttons";

export default function Invite() {
  const styles = StyleSheet.create({
    headerText: {
      color: "white",
      fontWeight: "700",
      fontSize: 45,
      marginTop: 15,
    },
    qrCode: {
      marginTop: -15,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const code = useSelector((state) => state.optionReducer.code);

  return (
    <View style={styles.container}>
      <QRCode value={code} size={200} style={styles.qrCode} />
      <Text style={styles.headerText}>{code}</Text>
    </View>
  );
}
