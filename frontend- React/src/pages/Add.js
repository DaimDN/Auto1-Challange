import React, { Component } from 'react'
import axios from 'axios';


export default class Add extends Component {

    constructor(props){
        super(props) ;
        this.state={
            cookieList : [],
            message: ""
        }
        this.inputHandler = this.inputHandler.bind(this);
    }

    componentDidMount(){
        var url = "http://localhost:5000/api/cookie";    
        axios.get(url).then((response)=>{

            this.setState({
                cookieList: response.data
            })
            console.log(response.data)
        
        }).catch((err)=>{console.log(err)});
    }


    inputHandler(event){
        var date = new Date();
        var name = this.name.value;
        var email = this.email.value;
        var cookie = this.list.value;
        var order = this.order.value;
        var payment = this.payment.value;
        var Orderdate = date.toLocaleString();
        var key = Date.now();



        var data = {"Name" : name, "Email" : email, "Cookie": cookie, "Order" : order, "Payment": payment, "Orderdate": Orderdate , "key": key};
        var posturl = "http://localhost:5000/order";

        axios.post(posturl, data).then((response)=>{console.log(response)}).catch((err)=>{console.log(err)});



        var Successmessage = "Thanks Order is Placed. Visit Kitchen";
        this.setState({
                message : Successmessage
        })

    
        this.name.value = "";
        this.email.value = "";
      
        event.preventDefault();

    }








    render() {
        var cookieerror = "";
        if(this.state.cookieList.length ===0){
            cookieerror = "Sorry Api isnt working"
        }
        else{
            cookieerror = ""
        }
        return (
            <div>
                <div className="container">
                    <div className="mx-auto" style={{marginTop: "4%", width: "70%"}}>
                    <h1>Order Cookies Now</h1>
                    
                        <form onSubmit={this.inputHandler} className="mx-auto">
                        <label>Person Name : </label>
                            <input type="text" ref={(a)=>this.name = a} className="form-control" placeholder="Enter your name *" required/>
                            <br/>
                            <label>Email Address : </label>
                            <input type="email" ref={(b)=> this.email = b} placeholder="Enter your Email" className="form-control" required/>
                            <br/>
                            <label>Type of Cookie : </label>
                          <p style={{color: 'red'}}>{cookieerror}</p>
                            <select className="form-control" ref={(list)=> this.list = list}>
                                 
                            {this.state.cookieList.map((data)=>{
                                return <option value={data.name}>{data.name}</option>
                            })}
                            </select>
                            <br/>
                            <p style={{color: 'red'}}>Sorry Dining in isnt available</p>
                            <label>Type of Order</label>
                            <select className="form-control" ref={(order)=> this.order = order}>
                                <option value="TAKEAWAY">Takeaway</option>
                                <option value="SITTING IN" disabled>Sitting In</option>
                            </select>
                            <br/>
                            <label>Payment Option</label>
                            <select className="form-control" ref={(op)=> this.payment = op}>
                                <option value="CARD">Debit Card</option>
                                <option value="CASH">Cash</option>
                            </select>
                            <br/>
                            <h5 className="text-warning">{this.state.message}</h5><br/>
                            <button type="submit" className="btn btn-lg btn-primary">Order</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
