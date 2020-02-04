import  { Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import React, { Component} from 'react';
import './App.css';
import Main from './Main';
import Folder from './Folder';
import Note from './Note';
import store from './store'


class App extends Component {
  state = {
     
      notes: store.notes,
      folders: store.folders
  }; 

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          
          <Route exact path="/" component= {Main} />
          <Route exact path="/Folder" render={(props) => <Folder folders ={this.state.folders}/>} />
          <Route exact path="/Note" render={(props) => <Note notes ={this.state.notes.map(item => item)}/>} /> 
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
