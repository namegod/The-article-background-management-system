const reminder = {
    mistake:{ errcode: 101, 'message': "参数有误" },
    dlete:{ errcode: 0, 'message': "删除成功" },
    busy:{ errcode: 102, 'message': "服务器繁忙，请稍后再试" },
    addsuccss: {errcode:0,message:'添加成功'},
    failtoadd:{errcode:103,message:'添加失败'},

}

module.exports = reminder;