

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


}






module.exports = articlecontroller;