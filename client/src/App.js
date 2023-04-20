import React, { createContext, useReducer } from 'react'
import Navbar from './components/Navbar';
import './App.css';   
import { Home } from './components/Home';
import About from './components/About';
import Contect from './components/Contect';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import Logout from "./components/Logout";
import {  Route, Switch } from "react-router-dom";
import { initialState } from './reducer/UseReducer';
import { reducer } from './components/reducer';
export const UserContext = createContext();


const Routing =() =>{
  return (
    <Switch>
    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/about">
    <About />
    </Route>

    <Route path="/contect">
    <Contect />
    </Route>

    <Route path="/Login">
    <Login />
    </Route>

    <Route path="/signup">
    <Signup />
    </Route>
    <Route path="/logout">
      <Logout />
    </Route>

    <Route>
      <Error />
    </Route>
    </Switch>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
    <UserContext.Provider value={{state, dispatch}}>
    <Navbar />
   <Routing />
    </UserContext.Provider>
    </div>
  );
}   
export default App;