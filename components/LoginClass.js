import { StatusBar } from "expo-status-bar";
import { Component } from "react";
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

export default class Login extends Component {
  state = {
      formData: {
        email: '',
        password: '',
        }
    };
  

  componentDidMount() {
    NavigationBar.setBackgroundColorAsync('#010709');
    NavigationBar.setBorderColorAsync('#fff');
  }
  

  handleInputChange = (field, value) => {
    this.setState(prevState => {
      console.log('previous state:', prevState.formData);
      const newFormData = {
        ...prevState.formData,
        [field]: value
      };
      console.log('New state:', newFormData);
      return { formData: newFormData };
    });
  };


  showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };

  handleOnPress = () => {
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

  render() {
    const { formData } = this.state;
    
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.formTitle}>Login</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(text) => this.handleInputChange('email', text)} 
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
              onChangeText={(text) => this.handleInputChange('password', text)} 
            />
          </View>

          <Pressable
            style={styles.button}
            onPress={this.handleOnPress}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
          <Text style={styles.signIn}>Already have an account? Sign in</Text>
        </ScrollView>
        
        <StatusBar style="auto" backgroundColor="#010709" />
      </SafeAreaView>
    );
  }
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
  signIn: {
    color: '#fff'
  }
});