import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import LottieView from "lottie-react-native";
import HeaderTabs from "../components/join/HeaderTabs";
import QRCode from "react-native-qrcode-svg";

const Join = ({ navigation }) => {
  const [joinCodeInput, setJoinCodeInput] = useState("");
  const [activeTab, setActiveTab] = useState("Join");

  const auth = firebase.auth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const loginAnonymously = () => {
    auth
      .signInAnonymously()
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in as user ", user.uid);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };

  const generateCode = () => {
    let code = "";
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 4; i++) {
      code += letters[Math.floor(Math.random() * letters.length)];
    }
    return code;
  };

  const code = generateCode();

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
      <SafeAreaView>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </SafeAreaView>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {activeTab === "Join" ? (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter join code here!"
                placeholderTextColor="#aaa"
                onChangeText={(text) => setJoinCodeInput(text)}
                style={styles.input}
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={loginAnonymously}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Join</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <QRCode value={code} size={200} style={styles.qrCode} />
            <Text style={styles.headerText}>{code}</Text>
          </>
        )}
      </KeyboardAvoidingView>
    </>
  );
};
export default Join;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  headerText: {
    color: "white",
    fontWeight: "700",
    fontSize: 45,
    marginTop: 15,
  },
  qrCode: {
    marginTop: -15,
  },
});
