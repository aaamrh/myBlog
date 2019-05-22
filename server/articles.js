const express = require('require')
const Router = express.Router()
const model = require('./server')
const Article = model.getModel('article')

module.exports = Router