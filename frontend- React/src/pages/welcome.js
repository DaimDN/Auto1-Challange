import React, { Component } from 'react'
import axios from 'axios';
import '../stylesheets/style.css'

export default class Welcome extends Component {

    constructor(props){
        super(props);
        this.state={
            orders: []
        }
    }

    componentDidMount(){
        var orderurl = "http://localhost:5000/api/orders";

        axios.get(orderurl).then((reponse)=>{

            this.setState({
                orders: reponse.data
            })

        }).catch((err)=>{console.log(err)});

    }
    render() {
        return (
            <div>
                <div className="container">
                <br/>
                    <h1 className="display-3 text-center">Welcome to Cookie Bakery</h1>
                    <p className="text-center">Choose an Option</p>
                    <div className="row mx-auto" style={{width: '90%'}}>
                    <div className="col-xl-6 col-md-6 mt">
                        <div className="card">
                            <div className="card-header text-center">
                                <h5 className="text-center">Current Orders</h5>
                                
                            </div>
                            <div className="card-body text-center">
                            <img style={{width: '30%'}} src="https://image.flaticon.com/icons/svg/2937/2937603.svg"/><br/><br/>
                               <a href="/kitchen"><button className="btn btn-primary" >View Orders</button></a> 
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 mt">

                    <div className="card">
                            <div className="card-header">
                                <h5 className="text-center">Order Now</h5>
                            </div>
                            <div className="card-body text-center">
                            <img style={{width: '30%'}} src="https://image.flaticon.com/icons/svg/2913/2913782.svg"/><br/><br/>
                           <a href="/house"> <button className="btn btn-primary" >Order Now</button></a>
                            </div>
                        </div>
                    </div>
                    
                      
                    </div>

                </div>
            </div>
        )
    }
}
