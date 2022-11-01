import React, { useState } from "react";
import { View, Text, Image, ScrollView, Modal, StyleSheet } from "react-native";
import { ChoiceIcon } from "../general/Buttons";
import Invite from "../join/Invite";

const images = [
  {
    image: require("../../assets/avatars/bee.png"),
  },
  {
    image: require("../../assets/avatars/cat.png"),
  },
  {
    image: require("../../assets/avatars/cow.png"),
  },
];

export default function PeopleList() {
  const [inviteModalVisible, setInviteModalVisible] = useState(false);
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.7)",
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
      <View
        style={{
          marginTop: 5,
          paddingVertical: 10,
          paddingLeft: 20,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          {images.map((item, index) => (
            <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain",
                }}
              />
            </View>
          ))}
          <View style={{ marginTop: 7 }}>
            <ChoiceIcon
              icon="account-plus"
              color="#ddd"
              size={25}
              sideMargins={0}
              onPress={() => setInviteModalVisible(true)}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
