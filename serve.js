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



app.use(roUter)



app.listen(4800,()=>{
    console.log('启动成功');
})