const express = require('express')
const Router = express.Router()
const model = require('./model')
const Article = model.getModel('article')


Router.get('/',  function(req, res){
  // Article.create({'title':'测试测试','click-num':'ni'}, function(err, doc){
  //     console.log(err)
  // })
  Article.find({}, function(err, doc){
    return res.json(doc)
  })
})


Router.post('/publish/', function(req, res){
  console.log(req.url)
  console.log(req.query)  // 解析GET中的参数
  console.log(req.body)
  console.log('-------------------')
  const { type, title, content, date } = req.body;

  const articleModel = new Article({type, title, content, date});

  articleModel.save(function(err,doc){
    
    if(err){console.log(err);return res.json({code:1, msg:'服务器忙'})}
    console.log(doc)
    const { type, _id} = doc;
    // res.cookie('user_id', _id)
    return res.json({code:0, data:{ type, _id } })
  })

})

module.exports = Router