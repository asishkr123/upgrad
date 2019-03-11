import React, { Component } from 'react';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Add from './Components/Add';
import Home from './Components/Home';
import Header from './Components/Header';
import ContactProvider from './Context/ContactContext';
import Edit from './Components/Edit';
class App extends Component {
  render() {
    return (
      <ContactProvider>
      <div className="container">
         <Header/>
        <BrowserRouter basename = {process.env.PUBLIC_URL}>
        <React.Fragment>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/add" component = {Add}/>
          <Route exact path = "/edit/:id" component = {Edit}/>
        </React.Fragment>
        </BrowserRouter>
      </div>
      </ContactProvider>
    );
  }
}

export default App;
