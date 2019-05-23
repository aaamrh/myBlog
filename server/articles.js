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

module.exports = Router