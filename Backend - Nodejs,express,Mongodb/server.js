const express = require('express');
const app = express();
const port = 5000;
const parser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const Index = require('./route/index');
mongoose.connect('mongodb+srv://Auto1:task@nodejs.2j0z7.mongodb.net/Cookiedb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.use(parser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/'));


app.use(logger('dev'));
var array = [];
var loginarray = [];



app.use(express.json());

app.get('/', Index);



var cookiearray = [{
        "name": "Almond Cookie"
    },
    {
        "name": "ALMOND BUCKEYE or BUCKEYE COOKIE"
    },
    {
        "name": "Almond Lace Cookie"
    },
    {
        "name": "Amareti"
    },
    {
        "name": "Animal Cracker"
    },
    {
        "name": "Bar Cookies"
    },
    {
        "name": "Bennie Waffer"
    },
    {
        "name": "Biscot"
    },
    {
        "name": "Biscuit"
    },
    {
        "name": "Black and White Cookie"
    }

];



app.get('/api/cookie', (req, res, next) => {
    res.send(cookiearray);


})

var OrderSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Cookie: String,
    Order: String,
    Payment: String,
    Orderdate: String,
    key: String
})

const OrderModel = mongoose.model('orders', OrderSchema);



app.post('/order', (req, res) => {

    var data = {
        "Name": req.body.Name,
        "Email": req.body.Email,
        "Cookie": req.body.Cookie,
        "Order": req.body.Order,
        "Payment": req.body.Payment,
        "Orderdate": req.body.Orderdate,
        "key": req.body.key
    }

    const currentOrder = new OrderModel(data);
    currentOrder.save();

})



app.get('/api/orders', (req, res) => {

    OrderModel.find().lean().exec(function(err, order) {
        return res.end(JSON.stringify(order));
    });

})




app.listen(port, (req, res) => {
    console.log("Server is up and running on port " + port);
})