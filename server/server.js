const express = require('express')
const mongoose = require('mongoose')
const DB_URL='mongodb://localhost:27017/marh-blog'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){console.log('mongodb 链接成功')})

const app = express();

app.get('/', (req, res)=>{
  res.send('hello world') 
})

app.listen(9093, function(req, res){
  console.log('Node app start at port 9093')
})