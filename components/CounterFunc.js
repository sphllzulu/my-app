
import { useEffect, useState } from "react";
import { StyleSheet,Pressable,View,Text} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function CounterFunc(){

   const [counter, setCounter]=useState(0);
   
//componentDidMount
  useEffect(()=>{
console.log('mounted')
return ()=>{console.log('unmounted')}
  },[])

//componentDidUpdate
  useEffect(()=>{
console.log('updated',counter)
  },[counter])


   function handleIncrement() {
    setCounter(prevCounter => prevCounter + 1);
}

function handleDecrement() {
    setCounter(prevCounter => prevCounter - 1);
}



    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View style={styles.counterCont}>
            <Pressable
            style={styles.button}
            onPress={handleIncrement}
            >
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Text style={styles.counterText}>{counter}</Text>
            <Pressable
            style={styles.button}
            onPress={handleDecrement}
            >
            <Text style={styles.buttonText}>Subtract</Text>
          </Pressable>
            </View>
        </SafeAreaView>
        </SafeAreaProvider>
    )
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