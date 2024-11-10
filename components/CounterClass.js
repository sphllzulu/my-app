import { Component } from "react";
import { StyleSheet,Pressable,View,Text} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default class Counter extends Component{

   
    state={
        counter:0
    }

handleIncrement = () => {
    this.setState(prevState => ({
    counter: prevState.counter + 1
    }));
};


handleDecrement = () => {
    this.setState(prevState => ({
        counter: prevState.counter - 1
    }));
};


render(){
    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View style={styles.counterCont}>
            <Pressable
            style={styles.button}
            onPress={this.handleIncrement}
            >
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Text style={styles.counterText}>{this.state.counter}</Text>
            <Pressable
            style={styles.button}
            onPress={this.handleDecrement}
            >
            <Text style={styles.buttonText}>Subtract</Text>
          </Pressable>
            </View>
        </SafeAreaView>
        </SafeAreaProvider>
    )
}


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#010709",
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
      counterCont:{
        flexDirection:'row'
      },
      counterText:{
        color:'#fff'
      }
})