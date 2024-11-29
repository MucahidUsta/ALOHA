import React from "react";
import { Text,Button } from "react-native";
import PostDisplay from "./PostDisplay";
import LifeCycleComponent from "./LifeCycleComponent";


class SinifBilesen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      post: null,
    };
  }

    componentDidMount() {
        this.veriCek();
    }

  veriCek=async ()=>{
    try{
        let response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let json=await response.json();
        this.setState({post:json});
    }
    catch(error){
      console.error(error);  
  
    }
  }
  arttir = () => {this.setState({ count: this.state.count + 1 });};
  azalt = () => {this.setState({ count: this.state.count - 1 });};

  render() {
    const { count,post } = this.state;
    return (
      <>
        <Text>{count}</Text>
        <Button title="Increment" onPress={this.arttir} />
        <Button title="Decrement" onPress={this.azalt} />
        <PostDisplay post={post} />
   
      </>
    );
  }
}

export default  SinifBilesen;