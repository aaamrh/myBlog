const mongoose = require('mongoose');
// const DB_URL='mongodb://localhost:27017/maBlog';
const DB_URL='mongodb://marh:010933@localhost:27017/maBlog';


mongoose.connect(DB_URL, {useNewUrlParser: true})
mongoose.connection.on('connected', function(){console.log('mongodb 链接成功')})


const models = {
  article:{
    'title': {type:String, require:true},
    'content': {type: String, require: true},
    'html':{type: String, require: true},
    'tag':{type: Array, require: true},
    'breaf-intro' : {type:String}, 
    'date': {type: String},
    'click': {type: Number}
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

