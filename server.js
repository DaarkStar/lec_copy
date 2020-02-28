var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

const mongoURI = "mongodb+srv://Asish:12345@cluster0-hlrlj.mongodb.net/test?retryWrites=true&w=majority"

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true,
        useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
  
var Users = require('./routes/Users')
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTION, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'x-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  //pass to next layer of middleware
  next();
})

app.post('/sent-data', (req,res) => {
 console.log(req.body)
 res.send(JSON.stringify(req.body))
})
app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})