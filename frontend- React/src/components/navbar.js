import React, { Component } from 'react'
import '../stylesheets/navbar.css'


export default class Navbar extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div style={{marginTop: '20px'}}>
            <a class="navbar-brand " href="/"><h1 className="main">
                   <img className="" style={{width: '50px'}} src="https://image.flaticon.com/icons/svg/541/541732.svg"/> Cookie Bakery
                </h1></a>
            </div>
               
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                  
                    <li class="nav-item">
                        <a class="nav-link" href="/kitchen"><button className="btn btn-primary">
                        Kitchen</button></a>
                    </li>
                   
                   
                    </ul>
                </div>
                </nav>
                
            </div>
        )
    }
}
