import { View, Text, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { fonts } from "react-native-elements/dist/config";
import ChosenItem from "./ChosenItem";
import firebase from "../../firebase";
import LottieView from "lottie-react-native";
import decisionAlgorithm from "../../decisionAlgorithm";

export default function ViewSuggestions({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const items = useSelector((state) => state.optionReducer.selectedItems.items);

  const chosenRestaurant = decisionAlgorithm({ items });
  const totalCount = items.length;

  const addToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection("choosings")
      .add({
        items: items,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        chosenRestaurant: chosenRestaurant,
        score: 1,
      })
      .then(() =>
        //usually this is wrapped as a promise in a .then() but since firebase is currently bugged I removed it
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("ChoiceFound");
        }, 100)
      )
      .catch((err) => console.log(err));
  };

  {
    /*const deselectItems = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, checkboxValue: checkboxValue },
    });*/
  }

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
  });
  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>Suggestions</Text>
            {items.map((item, index) => (
              <ChosenItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Total</Text>
              <Text>{totalCount}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "#8bf6c5",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addToFireBase();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>
                  Decide! (2/3)
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {totalCount ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 80, //80
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                Suggestions • {totalCount}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "110%",
            width: "100%",
            zIndex: 999,
          }}
        >
          <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
