import { Component } from 'react'



class SayHello extends Component{
  componentWillUnmount(){
    console.log("Component was deleted")
  }
  
  render(){
    return(
      <h1>Hello Everyone</h1>
    )
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor is running...');
    this.state={
      text:"Hello",
      time:20,
      active:true
    }
  }
  componentDidMount() {
    console.log('componentDidMount is running');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate is running');
    // setTimeout(() => {
    //   this.setState({
    //     time:30
    //   })
    // }, 2000);
  }
  render() {
    let myComp;
    if (this.state.active) {
      myComp=<SayHello/>
    }
    return (
      <div>
        {myComp}
        <p>{this.state.time}</p>
        <p>{this.state.text}</p>
        <button onClick={()=>{
          this.setState({
            text:"World"
          })
        }}>change</button>
        <button onClick={()=>{this.setState({active:false})}}>delete</button>
      </div>
    )
  }
}

export default App