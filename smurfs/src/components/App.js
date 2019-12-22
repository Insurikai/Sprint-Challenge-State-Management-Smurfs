import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux';
import {update, add, remove} from '../actions';
import SmurfVillage from './SmurfVillage';
import CreateSmurf from './CreateSmurf';

class App extends Component {
  componentDidMount(){
    this.props.update();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfVillage smurfs={this.props.state} remove={this.props.remove}/>
        <CreateSmurf add={this.props.add}/>
        <button onClick={()=>{this.props.add({name: 'Ted',age: 10, height: '10cm'})}}>Add</button>
      </div>
    );
  }
}

export default connect (state=>{return {state: state}},{update,add,remove})(App);