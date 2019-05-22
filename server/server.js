const express = require('express');
const mongoose = require('mongoose');
const DB_URL='mongodb://localhost:27017/marh-blog';
const articleRouter = require('./articles')


mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){console.log('mongodb 链接成功')})


const app = express();
app.use('/article', articleRouter);

app.listen(9093, function(req, res){
  console.log('Node app start at port 9093')
})


const models = { 
  article:{
    'title': {type:String, require:true},
    'content': {type: String, require: true},
    'date': {type: Date, require: true},
    'breaf-intro' : {type:String, require: true},
    'type':{type: String, require: true},
    'click-num': {type: Number, require:false}
  }
}
   

for(let i in models){
  mongoose.model(m, new mongoose.Schema(models[i]))
}


module.exports = {
  getModel: function(name){
    return mongoose.model(name)
  }
}
