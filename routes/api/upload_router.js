var router = require('koa-router')();
const fs = require('fs');

const multer = require('koa-multer'); //加载koa-multer模块
var upload_controller = require('../../app/controllers/upload_controller');
//文件上传
//配置
var storage = multer.diskStorage({
	//文件保存路径
	destination: function(req, file, cb) {
		var path = process.cwd() + '/files/uploads/' + req.body.userid + '/';
		if(!fs.existsSync(path)) {
			fs.mkdirSync(path);
		}
		cb(null, path)
	},
	//修改文件名称
	filename: function(req, file, cb) {
		// var fileFormat = (file.originalname).split(".");
		cb(null, file.originalname);
	}
})
//加载配置
var upload = multer({
	storage: storage
}); //{ dest: '../../files/uploads/' }
router.post('/ble_connect', upload.single('file'), upload_controller.ble_connect);

module.exports = router;