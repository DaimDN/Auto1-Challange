import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Navbar from '../components/navbar';
  import Home from '../pages/home';
  import Kitchen from '../pages/kitchen';
  import Add from '../pages/Add';
  import Welcome from '../pages/welcome';


export default class Routers extends Component {
    render() {
        return (
       <Router>
           <div>
            <Navbar/>
            <Switch>
            <Route path="/add">
              <Add/>
            </Route>
          <Route path="/kitchen">
            <Kitchen/>
          </Route>  
          <Route path="/house">
            <Home/>
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
        
        
           </div>
       </Router>
            
              
            
        )
    }
}


