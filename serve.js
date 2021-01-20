const express = require('express');
const path = require('path');
const app = express();

const  roUter = require('./rouTer/userouter.js')



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/public', express.static(path.join(__dirname, 'public')));

const artTemplate = require('art-template');
const express_template = require('express-art-template');
const { chdir } = require('process');

//模板的路径
app.set('views', __dirname + '/views/');

app.engine('html', express_template);

app.set('view engine', 'html');


// app.get(/^\/$|^\/admin$/, (req, res) => {
//     res.render('index.html')
// })


// app.get('/artindex', (req, res) => {

//     res.render('article-index.html')
// })

// // 渲染后台分类列表页面
// app.get('/catindex', (req, res) => {

//     res.render('category.html')
// })

// app.get('/artadd', (req, res) => {

//     res.render('article-add.html')
// })


// // 获取分类数据的接口
// app.get('/getCate', async (req, res) => {
//     // 1.查询数据库
//     let sql = "select * from category order by sort"
//      let data= await usesql(sql)
//         res.json(data)
   
//     // 2.返回数据
// })

// // 删除分类的接口
// app.post('/dispatch', async(req, res) => {
//     let { cat_id } = req.body;

//     // 判断参数
//     if (!cat_id) {
//         respons= reminder.mistake;
//     } else {
//         cat_id = parseInt(cat_id);
//         let sql = `delete from category where cat_id = ${cat_id}`

//         let data;
//         let respons;
  

//          try{
//            data= await usesql(sql)
//            respons =  reminder.dlete;

//          }catch(e){
//             respons= reminder.busy;
//          }
      

           
//                 res.json(respons)
         
        
//     }
// })

app.use(roUter)



app.listen(4800,()=>{
    console.log('启动成功');
})