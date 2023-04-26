const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())


mongoose.connect("mongodb+srv://ddutta706:Kp9AhM76EvHSQyYk@cluster0.levfaad.mongodb.net/login-assignment", { 
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected succsessfully"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});