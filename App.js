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


import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  FlatList
} from "react-native";

export default function App() {

  

  return (
    <SafeAreaView style={styles.container}>
    <FlatList/>
      
      
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