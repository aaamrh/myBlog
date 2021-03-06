const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const articleRouter = require('./articles');


const app = express();
app.use(bodyParser.urlencoded({    
  extended: true
}));
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/article', articleRouter);
app.listen(9093, '0.0.0.0', function(req, res){ 
  console.log('Node app start at port 9093')
}) 


