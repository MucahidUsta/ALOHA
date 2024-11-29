import React, { useState } from "react";

import { StyleSheet,  View ,Button} from "react-native";
import ChildComponent from "./ChildComponent";
import SinifBilesen from "./SinifBilesen";
import LifeCycleComponent from "./LifeCycleComponent";
import TimerComponent from "./TimerComponent";
import { CounterProvider } from "./CounterContext";
import CounterScreen from "./CounterScreen";


const App=()=> {
  
  const [count,setCount]=useState(0);

  return (
    <CounterProvider>
    <View style={styles.container}>
      <ChildComponent count={count} />
      <Button title="Increment" onPress={()=>setCount(count+1)} />
      <Button title="Decrement" onPress={()=>setCount(count-1)} /> 
      <SinifBilesen/>
     <LifeCycleComponent/>
     <TimerComponent/>
     <CounterScreen/>
    </View>
    </CounterProvider>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});