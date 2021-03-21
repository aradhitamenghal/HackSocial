import React from 'react';
import NavBar from './components/Navbar'
import "./App.css"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/screens/Home'
import Signin from './components/screens/Signin'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'


function App() {
 return ( 
    <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path="/" >
      <Home />
      </Route>
      <Route exact path="/Signin">
        <Signin />
      </Route>
      <Route exact path="/Signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>

      
    </Switch>
      
    </BrowserRouter>
  );
}

export default App;