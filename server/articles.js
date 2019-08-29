const express = require('express')
const Router = express.Router()
const model = require('./model')
const Article = model.getModel('article')


Router.get('/',  function(req, res){
  // Article.create({'title':'测试测试','click-num':'ni'}, function(err, doc){
      // console.log('err')
  // })
  console.log('/')
  Article.find({}, function(err, doc){
    if(err){
      console.log('---- / err  ----')
      console.log(err)
    }
    return res.json({articles:doc})  
  })
})


Router.get('/article_content/', function(req, res){
  console.log(req.query)
  const {id} = req.query
  console.log(id)
  Article.findOne({_id:id}, function(err, doc){
    if(doc){
      console.log(doc)
    }
  })
  return ''
}) 


Router.post('/publish/', function(req, res){
  // console.log(req.url)
  // console.log(req.query)  // 解析GET中的参数
  // console.log(req.body)
  console.log('-------------------')
  const { tag, title, content, date, outputHTML } = req.body;

  const articleModel = new Article({tag, title, content, date, html:outputHTML});

  articleModel.save(function(err,doc){
    
    if(err){console.log(err);return res.json({code:1, msg:'服务器忙'})}
    console.log(doc)
    const { tag, _id, title, content, date } = doc;
    // res.cookie('user_id', _id)
    return res.json({code:0, data:{ tag, _id, title, content, date } })
  })

})

module.exports = Router