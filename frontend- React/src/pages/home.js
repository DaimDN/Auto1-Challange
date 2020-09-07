import React, { Component } from 'react'
import axios from 'axios';
import '../stylesheets/house.css'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
        drop: false,
        black: true,
        textbl : true,
        bgtext: true,
        sun : true,
        shop: true,
        mail: true,
        dropMailbox : true




        }
        this.changeColor= this.changeColor.bind(this);
        this.Mailbox = this.Mailbox.bind(this);
    }



    Mailbox(){
       this.setState({
           dropMailbox : !this.state.dropMailbox
       })
    }

    changeColor(){
        this.setState({
            black: !this.state.black,
            textbl: !this.state.textbl,
            bgtext : !this.state.bgtext,
            sun : !this.state.sun,
            shop : !this.state.shop,
            mail : !this.state.mail            
        })
       
     }

    render() {

        let bgColor = this.state.black ? "" : "bg-dark";
        let TextColor = this.state.black ? "black display-4" : "hiddentext";
        let TextColor2 = this.state.bgtext ? "text-white" : "display-2 text-white";
        let SunColor = this.state.sun ? "sun" : "sun-night";
        let ShopVisibility = this.state.shop ? "door" : "gone";
        let Mailbox = this.state.shop ? "mailbox" : "gone";
        let DropMail = this.state.dropMailbox ? "mailbox" : "drop";
       
    
     

        return (
            <div className={bgColor}>
            
               <div className="text-center">
               <div className="container">
               <h1 className={TextColor2}>Sorry Shop is Shut</h1>
               <h1 className={TextColor}>Press Door To Order</h1>
              
               <div className={SunColor} onClick={this.changeColor}><br/><br/>{this.state.sun}</div>
               </div>
               <div className="house">
               
               <div className="roof"> </div>
             
             
             
             <div className="pillar">
             <div className="cookie"><h5 className="text-white" ><br/>Cookie Bakery</h5></div>
                 <div className="row" >
                 <div className="col-xl-6 col-md-6 col-sm-6">  <div className="window-1 mx-auto"></div></div>
                 <div className="col-xl-6 col-md-6 col-sm-6 mx-auto text-center">   <div className="window-2 mx-auto"></div></div>
                 </div>
                 <div className={DropMail} onClick={this.Mailbox}><br/>
                 <div className="strip"></div>
                    <br/>
                     <h5 className="text-white">MailBox</h5>
                 </div>
                 <a href="/add" className={ShopVisibility}>
                 <div className={ShopVisibility}>
                    <div className="handle"></div>

                 </div>
                 </a>
                
                 
             </div>
             </div>
               <div className="platform bg-dark"></div>
           
               
         
                  
               </div>
            </div>
        )
    }
}
