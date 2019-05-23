const mongoose = require('mongoose');
const DB_URL='mongodb://localhost:27017/marh-blog';


mongoose.connect(DB_URL)
mongoose.connection.on('connected', function(){console.log('mongodb 链接成功')})


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
  mongoose.model(i, new mongoose.Schema(models[i]))
}

module.exports = {
  getModel:function(name){
    return mongoose.model(name)
  }
}

