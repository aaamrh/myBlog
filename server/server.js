const express = require('express')

const app = express();

app.get('/', (req, res)=>{
  res.send('hello world')
})

app.listen(9093, function(req, res){
  console.log('Node app start at port 9093')
})