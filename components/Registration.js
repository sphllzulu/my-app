import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  Alert,
  ToastAndroid,
} from "react-native";

import * as NavigationBar from "expo-navigation-bar";
import CustomInput from "./CustomInput";
export default function Registration() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    houseNumber: "",
    streetName: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => {
      console.log("previous state:", prev);
      const newState = {
        ...prev,
        [field]: value,
      };
      console.log("New state:", newState);
      return newState;
    });
  };

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#010709");
    NavigationBar.setBorderColorAsync("#fff");
  }, []);

  const showToast = () => {
    ToastAndroid.show("A pikachu appeared nearby !", ToastAndroid.SHORT);
  };

  const handleOnPress = () => {
    console.log("Button pressed");
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.formTitle}>Register</Text>

        {/* <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="First Name"
            placeholderTextColor="#666"
            value={formData.firstName}
            onChangeText={(text) => handleInputChange('firstName',text)} 

          />
        </View> */}
        <CustomInput
          name={"first Name"}
          onChange={(ev) => {
            handleInputChange("firstName", ev);
          }}
        />
        <CustomInput
          name={"Last Name"}
          onChange={(ev) => {
            handleInputChange("lastName", ev);
          }}
        />
        <CustomInput
          name={"Gender"}
          onChange={(ev) => {
            handleInputChange("gender", ev);
          }}
        />
        <CustomInput
          name={"Phone Number"}
          onChange={(ev) => {
            handleInputChange("phoneNumber", ev);
          }}
        />

        <CustomInput
          name={"email"}
          onChange={(ev) => {
            handleInputChange("email", ev);
          }}
        />

        <CustomInput
          name={"password"}
          onChange={(ev) => {
            handleInputChange("password", ev);
          }}
        />
        <CustomInput
          name={"Confirm password"}
          onChange={(ev) => {
            handleInputChange("confirmPassword", ev);
          }}
        />
       
        <CustomInput
          name={"House number"}
          onChange={(ev) => {
            handleInputChange("houseNumber", ev);
          }}
        />
        <CustomInput
          name={"Street name"}
          onChange={(ev) => {
            handleInputChange("streetName", ev);
          }}
        />
        <CustomInput
          name={"City"}
          onChange={(ev) => {
            handleInputChange("city", ev);
          }}
        />
        <CustomInput
          name={"Province"}
          onChange={(ev) => {
            handleInputChange("province", ev);
          }}
        />
        <CustomInput
          name={"Postal Code"}
          onChange={(ev) => {
            handleInputChange("postalCode", ev);
          }}
        />

        <Pressable style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
        <Text style={styles.signIn}>Already have an account?Sign in</Text>
      </ScrollView>

      <StatusBar style="auto" backgroundColor="#010709" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010709",
  },
  formTitle: {
    color: "#bdbdbd",
    fontSize: 26,
    marginVertical: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ff69b4",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 12,
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#bdbdbd",
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000",
  },
  label: {
    color: "#bdbdbd",
    marginLeft: 12,
    marginTop: 8,
  },
  inputContainer: {
    backgroundColor: "transparent",
  },
  scrollView: {
    gap: 15,
    paddingVertical: 20,
  },
  signIn: {
    color: "#fff",
  },
});
