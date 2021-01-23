

let usesql =require("../util/mysql")

const  reminder = require('../util/adad')

let articlecontroller ={
    admin: (req, res) => {
        res.render('index.html')
    },
    artindex: (req, res) => {
        res.render('article-index.html')
    },

    addition :(req,res)=>{
        res.render('addition.html')
    },


    catindex: (req, res) => {
        res.render('category.html')
    },

    artadd:(req, res) => {

        res.render('article-add.html')
    },

    ContentAdd:(req,res)=>{
        res.render('ContentAdd.html')
    },
    
    getCate:async (req, res) => {
         //查询数据库
        let sql = "select * from category order by sort asc"
         let data= await usesql(sql)
            res.json(data)
       
        
    },

    dispatch: async(req, res) => {
        let { cat_id } = req.body;
    
        // 判断参数
        if (!cat_id) {
            respons= reminder.mistake;
        } else {
            cat_id = parseInt(cat_id);
            let sql = `delete from category where cat_id = ${cat_id}`
    
            let data;
            let respons;
       
             try{
               data= await usesql(sql)
               respons =  reminder.dlete;
    
             }catch(e){
                respons= reminder.busy;
             }
                       
                    res.json(respons)
             
            
        }
    },
    

    Addarticle: async (req,res)=>{
        //1.接收参数
        let {name,sort,add_date} = req.body;
        //2.入库
        let sql = `insert into category(name,sort,add_date) values('${name}',${sort},'${add_date}')`
        console.log(sql);
        //3.响应结果
        let result = await model(sql);
        if(result.affectedRows){
            // 成功
            res.json(addsuccss)
        }else{
            res.json(failtoadd)
        }
    },

    allArticle: async (req,res)=>{
        //1. 接收查询字符串,给limit取别名
        let {page,limit:pagesize} = req.query;
        //2.编写sql语句
        let offset = (page - 1)*pagesize;
        let sql = `select * from article order by art_id desc limit ${offset},${pagesize} `;
        let sql2 = `select count(*) as count from article;`
        let promise1 =  model(sql); // [{},{},{}]
        let promise2 =  model(sql2); // [{count:16}]
        // 并行
        let result = await Promise.all([promise1,promise2])
        let data = result[0];
        let count = result[1][0].count;
        let response = {
            code: 0,
            count: count, // 1000是数据的总记录数
            data: data,
            msg:''
        }
        // console.log(data)
        res.json(response)
        // res.json(articleData)
    }
    


}






module.exports = articlecontroller;