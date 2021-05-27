var express = require('express');
var cors = require('cors');
const path = require('path');
var mongo = require('./database/connection');
const app = express();
console.log(mongo)
app.use(cors())
app.use(express.json());
app.listen(3000)
app.post('/employee/create', (req, res)=> {
    console.log(req.body)
}); 
app.get('/',(req, res)=> {

    console.log(req.body)
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});