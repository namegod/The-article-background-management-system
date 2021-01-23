const express = require('express');

let  rouTer =express.Router();


const articlecontroller =require('../controller/articlecontroller')


rouTer.get(/^\/$|^\/admin$/,articlecontroller.admin)


rouTer.get('/artindex',articlecontroller.artindex)

rouTer.get('/addition',articlecontroller.addition)
rouTer.get('/ContentAdd',articlecontroller.ContentAdd)

rouTer.get('/allarticle',articlecontroller.allArticle)

// 分类列表页面
rouTer.get('/catindex',articlecontroller.catindex)

rouTer.get('/artadd',articlecontroller.artadd)



// 分类数据的接口
rouTer.get('/getCate',articlecontroller.getCate)

// 删除分类的接口
rouTer.post('/dispatch',articlecontroller.dispatch)

rouTer.post('/Addarticle',articlecontroller.Addarticle)


module.exports = rouTer;