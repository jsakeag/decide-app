import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ChoiceIcon } from "./general/Buttons";
import HomeText from "./HomeText";
import firebase from "../firebase";

export default function HeaderTab(props) {
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.7)",
    },
    center: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 30,
    },
    xButton: { position: "absolute", right: 25, top: 25 },
  });

  const helpModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.center}>
            <Text style={{ color: "white" }}>Welcome to Decide!</Text>
            <Text style={{ color: "white" }}>
              Search for restaurants then suggest them by pressing the checkbox
              on the right!
            </Text>
            <Text style={{ color: "white" }}>
              Click on restaurants for more info. After your group is done
              suggesting, press Decide!
            </Text>
            <Text style={{ color: "white" }}>
              (invite people here or join by messages)
            </Text>
          </View>
          <View style={styles.xButton}>
            <ChoiceIcon
              icon="alpha-x"
              color="#ddd"
              size={25}
              onPress={() => setHelpModalVisible(false)}
            />
          </View>
        </View>
      </>
    );
  };

  const settingsModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.center}>
            <Text style={{ color: "white" }}>Settings coming soon!</Text>
            <Text style={{ color: "white" }}>
              User ID: {firebase.auth().currentUser?.uid}
            </Text>
          </View>
          <View style={styles.xButton}>
            <ChoiceIcon
              icon="alpha-x"
              color="#ddd"
              size={25}
              onPress={() => setSettingsModalVisible(false)}
            />
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={helpModalVisible}
        transparent={true}
      >
        {helpModalContent()}
      </Modal>
      <Modal
        animationType="slide"
        visible={settingsModalVisible}
        transparent={true}
      >
        {settingsModalContent()}
      </Modal>
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
              icon="help"
              color="#fcbaaa"
              size={30}
              sideMargins={1}
              onPress={() => setHelpModalVisible(true)}
            />
            <ChoiceIcon
              icon="cog"
              color="#fcbaaa"
              size={30}
              sideMargins={0}
              onPress={() => setSettingsModalVisible(true)}
            />
          </View>
        </View>
        {/*<BorderLine />*/}
      </View>
    </>
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
