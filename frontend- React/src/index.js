import React, { Component } from 'react'
import axios from 'axios';
import ReactDOM from 'react-dom';
import Routers from './routers/router';
import { Switch, Route } from 'react-router-dom';


class Index extends Component {
   
    


    render() {
        return (
            <div>
           
           <Routers/>
             
            </div>
        )
    }
}

const TARGET = document.querySelector('#app');
ReactDOM.render(<Index/>, TARGET);