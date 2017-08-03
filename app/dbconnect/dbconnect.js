var db = require('mongoose'),
	url = 'mongodb://127.0.0.1:27017/bledatabase';
db.connect(url);
//db.Promise = Promise;
//console.log("链接数据库");

db.connection.on("error", function (error) {  
    console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {  
    console.log("数据库连接成功"); 
})

db.connection.on('disconnected', function () {    
    console.log('数据库连接断开');  
})
module.exports = db;