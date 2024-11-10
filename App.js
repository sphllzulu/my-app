// import { StatusBar } from "expo-status-bar";
// import {
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   ScrollView,
//   View,
//   FlatList
// } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
   
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <Text style={styles.formTitle}>Register</Text>
        
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>First Name</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="First Name"
//             placeholderTextColor="#666"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Last Name</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Last Name"
//             placeholderTextColor="#666"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Gender</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Gender"
//             placeholderTextColor="#666"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Phone number</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Phone number"
//             placeholderTextColor="#666"
//             keyboardType="phone-pad"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Email</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Email"
//             placeholderTextColor="#666"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Password</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Password"
//             placeholderTextColor="#666"
//             secureTextEntry={true}
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Confirm Password</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Confirm Password"
//             placeholderTextColor="#666"
//             secureTextEntry={true}
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>House Number</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="House Number"
//             placeholderTextColor="#666"
//             keyboardType="numeric"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Street Name</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Street Name"
//             placeholderTextColor="#666"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>City</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="City"
//             placeholderTextColor="#666"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Province</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Province"
//             placeholderTextColor="#666"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Postal Code</Text>
//           <TextInput 
//             style={styles.input} 
//             placeholder="Postal Code"
//             placeholderTextColor="#666"
//             autoCapitalize="characters"
//             onChangeText={(text) => {console.log(text)}} 
//           />
//         </View>

//         <Pressable
//           style={styles.button}
//           onPress={() => {
//             console.log("button pressed");
//           }}
//         >
//           <Text style={styles.buttonText}>Register</Text>
//         </Pressable>
//       </ScrollView>
      
      
//       <StatusBar style="auto" backgroundColor="#010709" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#010709",
//   },
//   formTitle: {
//     color: '#bdbdbd',
//     fontSize: 26,
//     marginVertical: 10,
//     textAlign: 'center'
//   },
//   button: {
//     backgroundColor: "#ff69b4",
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     marginHorizontal: 12
//   },
//   buttonText: {
//     color: "#fff",
//     textTransform: "uppercase",
//     textAlign: 'center',
//     fontWeight: 'bold'
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: "#bdbdbd",
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     color: "#000"
//   },
//   label: {
//     color: '#bdbdbd',
//     marginLeft: 12,
//     marginTop: 8
//   },
//   inputContainer: {
//     backgroundColor: 'transparent',
//   },
//   scrollView: {
//     gap: 15,
//     paddingVertical: 20
//   }
// });
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   formTitle: {
//     color: '#bdbdbd',
//     fontSize: 26,
//     marginVertical: 10,
//     textAlign: 'center'
//   },
//   button: {
//     backgroundColor: "#ff69b4",
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     marginHorizontal: 12
//   },
//   buttonText: {
//     color: "#fff",
//     textTransform: "uppercase",
//     textAlign: 'center',
//     fontWeight: 'bold'
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: "#bdbdbd",
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     color: "#000"
//   },
//   label: {
//     color: '#bdbdbd',
//     marginLeft: 12,
//     marginTop: 8
//   },
//   inputContainer: {
//     backgroundColor: 'transparent',
//   },
//   scrollView: {
//     gap: 15,
//     paddingVertical: 20
//   }
// });




// flatlist with destructuring
// import { StatusBar } from "expo-status-bar";
// import {
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   ScrollView,
//   View,
//   FlatList
// } from "react-native";

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//       <StatusBar style="auto" backgroundColor="#010709" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

//flatlist without destructuring
// import { StatusBar } from "expo-status-bar";
// import {
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   ScrollView,
//   View,
//   FlatList,
  
// } from "react-native";

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const Item = (props) => {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{props.title}</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={(props) => {
//           return <Item title={props.item.title}/>
//         }}
//         keyExtractor={(item) => item.id}
//       />
//       <StatusBar style="auto" backgroundColor="#010709" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });



//using images
// import { StatusBar } from "expo-status-bar";
// import {
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   ScrollView,
//   View,
//   FlatList,
//   Image,
//   ActivityIndicator
// } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//   },
//   logo: {
//     width: 66,
//     height: 58,
//   },
// });


// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//       <Image
//         style={styles.tinyLogo}
//         source={require('./assets/adaptive-icon.png')}
//         resizeMode="contain"
//       />
//        <ActivityIndicator />
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//       />
//       <Image
//         style={styles.logo}
//         source={{
//           uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
//         }}
//       />
//       </ScrollView>
//       <StatusBar style="auto" backgroundColor="#010709" />
//     </SafeAreaView>
//   );
// }



//learning how to use useState via the form
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
export default function App() {


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
        <Pressable
          style={styles.button}
          onPress={showToast}>
          <Text style={styles.buttonText}>Toast</Text>
        </Pressable>
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
  }
});

//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   formTitle: {
//     color: '#bdbdbd',
//     fontSize: 26,
//     marginVertical: 10,
//     textAlign: 'center'
//   },
//   button: {
//     backgroundColor: "#ff69b4",
//     padding: 15,
//     borderRadius: 10,
//     marginTop: 20,
//     marginHorizontal: 12
//   },
//   buttonText: {
//     color: "#fff",
//     textTransform: "uppercase",
//     textAlign: 'center',
//     fontWeight: 'bold'
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: "#bdbdbd",
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     color: "#000"
//   },
//   label: {
//     color: '#bdbdbd',
//     marginLeft: 12,
//     marginTop: 8
//   },
//   inputContainer: {
//     backgroundColor: 'transparent',
//   },
//   scrollView: {
//     gap: 15,
//     paddingVertical: 20
//   }
// });
