var mysql = require('mysql');

//连接数据库参数配置
let sql =require("../sql.json")
var connection = mysql.createConnection({
   ...sql
});

//连接mysql
connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log('connect mysql success');
});






function usesql(sql){
    return new Promise((resolve,reject)=>{
        connection.query(sql,(err,data)=>{
            if(err){reject(err)}
            resolve(data)
        })
    })
}


module.exports = usesql;