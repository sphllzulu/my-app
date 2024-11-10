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
  ToastAndroid
} from "react-native";

import * as NavigationBar from 'expo-navigation-bar';
export default function Registration() {


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    houseNumber: '',
    streetName: '',
    city: '',
    province: '',
    postalCode: ''
  });

  const handleInputChange= (field,value)=>{
    setFormData((prev)=>{
      console.log('previous state:',prev)
      const newState={
        ...prev,
        [field]:value
      }
    console.log('New state:',newState)
    return newState;
    });
  };

  

  useEffect(()=>{
    NavigationBar.setBackgroundColorAsync('#010709')
    NavigationBar.setBorderColorAsync('#fff')
  },[])

  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };

  const handleOnPress = () => {
    console.log('Button pressed');
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
   
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.formTitle}>Register</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="First Name"
            placeholderTextColor="#666"
            value={formData.firstName}
            onChangeText={(text) => handleInputChange('firstName',text)} 

          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Last Name"
            placeholderTextColor="#666"
            value={formData.lastName}
            onChangeText={(text) => handleInputChange('lastName',text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gender</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Gender"
            placeholderTextColor="#666"
            value={formData.gender}
            onChangeText={(text) => handleInputChange('gender',text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Phone number"
            placeholderTextColor="#666"
            keyboardType="phone-pad"
            value={formData.phoneNumber}
            onChangeText={(text) => handleInputChange('phoneNumber',text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email',text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry={true}
            value={formData.password}
            onChangeText={(text) => handleInputChange('password',text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Confirm Password"
            placeholderTextColor="#666"
            secureTextEntry={true}
            value={formData.confirmPassword}
            onChangeText={(text) => handleInputChange('confirmPassword',text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>House Number</Text>
          <TextInput 
            style={styles.input} 
            placeholder="House Number"
            placeholderTextColor="#666"
            keyboardType="numeric"
            value={formData.houseNumber}
            onChangeText={(text) => handleInputChange('houseNumber',text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Street Name</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Street Name"
            placeholderTextColor="#666"
            value={formData.streetName}
            onChangeText={(text) => handleInputChange('streetName',text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>City</Text>
          <TextInput 
            style={styles.input} 
            placeholder="City"
            placeholderTextColor="#666"
            value={formData.city}
            onChangeText={(text) => handleInputChange('city',text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Province</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Province"
            placeholderTextColor="#666"
            value={formData.province}
            onChangeText={(text) => handleInputChange('province',text)} 
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Postal Code</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Postal Code"
            placeholderTextColor="#666"
            autoCapitalize="characters"
            value={formData.postalCode}
            onChangeText={(text) => handleInputChange('postalCode',text)}
          />
        </View>

        <Pressable
          style={styles.button}
          onPress={handleOnPress}>
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
    color: '#bdbdbd',
    fontSize: 26,
    marginVertical: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: "#ff69b4",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 12
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#bdbdbd",
    backgroundColor: "#fff",
    borderRadius: 5,
    color: "#000"
  },
  label: {
    color: '#bdbdbd',
    marginLeft: 12,
    marginTop: 8
  },
  inputContainer: {
    backgroundColor: 'transparent',
  },
  scrollView: {
    gap: 15,
    paddingVertical: 20
  },
  signIn:{
    color:'#fff'
  }
});

