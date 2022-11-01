import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ChoiceIcon } from "./general/Buttons";
import Invite from "./join/Invite";

export default function HeaderTab(props) {
  const [inviteModalVisible, setInviteModalVisible] = useState(false);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
    xButton: { position: "absolute", right: 25, top: 25 },
  });

  const inviteModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <Invite />
          <View style={styles.xButton}>
            <ChoiceIcon
              icon="alpha-x"
              color="#ddd"
              size={25}
              onPress={() => setInviteModalVisible(false)}
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
        visible={inviteModalVisible}
        transparent={true}
      >
        {inviteModalContent()}
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
              icon="account-plus"
              color="#fcbaaa"
              size={30}
              sideMargins={0}
              onPress={() => setInviteModalVisible(true)}
            />
            <ChoiceIcon icon="help" color="#fcbaaa" size={30} sideMargins={1} />
            <ChoiceIcon icon="cog" color="#fcbaaa" size={30} sideMargins={0} />
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
