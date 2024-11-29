import React, { useEffect,useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

 const TimerComponent = () => { 
    const [count, setCount] = useState(0);
    const[isActive,setIsActive]=useState(false);

    useEffect(() => {
        let interval;
        if(isActive){
            interval=setInterval(()=>{
                setCount(count=>count+1);
            },1000);
        }else{
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };

    },[isActive,count]);

    return (
        <View style={styles.container}>
      <Text style={styles.text}>Timer: {count}s</Text>
      <Button
        title={isActive ? 'Pause' : 'Start'}
        onPress={() => setIsActive(!isActive)}
      />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>

    );
 }
export default TimerComponent;
 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      marginBottom: 10,
    },
  });