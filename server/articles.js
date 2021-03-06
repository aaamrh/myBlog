const express = require('express')
const Router = express.Router()
const model = require('./model')
const Article = model.getModel('article')

const _filter = {'pwd':false, '__v':false}

Router.get('/article_list/',  function(req, res){
  // Article.create({'title':'测试测试','click-num':'ni'}, function(err, doc){
      // console.log('err')
  // })
  console.log('/article_list/')
  Article.find({}, function(err, doc){
    if(err){
      console.log('---- / err  ----')
      console.log(err)
    }
    return res.json({articles:doc})  
  }).sort([['date',-1]])
  // .limit(4) 查询多少个
})


Router.get('/article_content/', function(req, res){
  console.log(req.query)
  const {id} = req.query
  console.log(id)
  Article.findOne({_id:id}, _filter, function(err, doc){
    if(err){
      console.log(err)
      return res.json({err: err})
    }
    return res.json({data: doc})
  })
}) 


Router.post('/publish/', function(req, res){
  // console.log(req.url)
  // console.log(req.query)  // 解析GET中的参数
  // console.log(req.body)
  console.log('--------/publish/-----------')
  const { tag, title, content, date, outputHTML } = req.body;
  console.log(req.body);
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