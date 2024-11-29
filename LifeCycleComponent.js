import React,{useState,useEffect} from "react";
import { View,Text,Button,StyleSheet } from "react-native";


const LifeCycleComponent=()=>{
    const [count,setCount]=useState(0);
    useEffect(() => {
        console.log('Component mounted');
    
        // Cleanup işlevi: ComponentWillUnmount
        return () => {
          console.log('Component unmounted');
        };
      }, []);
    
      useEffect(() => {
        console.log('Count updated: ', count);
      }, [count]);
    
    
    return(
        <View style={styles.container}>
            <Text>{count}</Text>
            <Button title="Increment" onPress={()=>setCount(count+1)}/>
            <Button title="Decrement" onPress={()=>setCount(count-1)}/>
        </View>
    );
}


export default LifeCycleComponent;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
    }
});