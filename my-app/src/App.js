import { Component } from 'react';
import logo from './logo.svg';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {
  state= {
    ninjas:[
      {name:"Rahul", age:"25", belt:"Black", id:1},
      {name:"Rohan", age:"26", belt:"Blue", id:2},
      {name:"Rishab", age:"27", belt:"Green", id:3}
    ]
  }

  addNinja = (ninja)=>{
    console.log(ninja);
    let ninjas = [...this.state.ninjas,ninja];
    ninja.id = Math.random();
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id) =>{
    let ninjas = this.state.ninjas.filter(ninja=> ninja.id !== id);
    this.setState({ninjas: ninjas});
  }
  render(){
    return (
      <div className="App">
        <h1>My First React App</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }  
}

export default App;
