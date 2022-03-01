// import logo from './logo.svg';
// import './App.css';
// import Signup from './Signin';
// import Login from './Login';
// import {Switch,Route} from 'react-router-dom';
// import {Container} from '@material-ui/core';
// function App() {
//   return (
//     <>
    // <Container maxWidth="md">
    // <div className= "app">
    //   <Switch>
    //     <Route path="/signup" exact component={Signup}/>
    //     <Route path="/login" exact component={Login}/>
    //   </Switch>
    // </div> 
    // </Container>
//     </>
//   );
// }

// export default App;

import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Container} from '@material-ui/core';
import Signup from './Signin';
import Login from './Login';

const App = () =>{
  return (
    <BrowserRouter>
      <Container maxWidth="md">
      <div className= "app">
        <Switch>
          <Route path="/signup" exact component={Signup}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
    </div> 
    </Container>
    </BrowserRouter>
  )
}

export default App
