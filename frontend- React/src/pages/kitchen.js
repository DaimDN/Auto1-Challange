import React, { Component } from 'react'
import axios from 'axios';
import '../stylesheets/style.css';


export default class Kitchen extends Component {

    constructor(props){
        super(props);
        this.state={
            orders: [],
            error: ""
        }
    }

    componentDidMount(){
        var orderurl = "http://localhost:5000/api/orders";

        axios.get(orderurl).then((reponse)=>{

            if(reponse.data.length=== 0){
                var errmessage = "No current Orders";
                this.setState({
                    error: errmessage
                })
            }
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
                    <h1 className="display-3 text-center">List of Current Orders</h1>
                    <h5 className="text-center" style={{color: 'red'}}>{this.state.error}</h5>
                    <div className="row text-center" style={{margin: 'auto'}}>

                        {this.state.orders.map((listing)=>{
                            return <div className=" col-xl-3  mt" style={{margin: '10px 15px'}}>
                            <div style={{}}>
                            <div class="flip-card x">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                <div className="overlap"><br/><br/><br/>
                                <h4 className="text-white">{listing.Name}</h4>
                                </div>
                                </div>
                                <div class="flip-card-back bg-dark text-white">
                                <br/>
                                
                                <h1>{listing.Name}</h1> 
                                <p>{listing.Orderdate}</p> 
                               
                                <hr/>
                               
                                <p>{listing.Cookie}</p>
                                <hr/>
                                <p>Number: {listing.key}</p>
                                </div>
                            </div>
                            </div>
                            </div>
                                                        
                                                        </div>
                        })}
                    </div>

                </div>
            </div>
        )
    }
}
