var router = require('koa-router')();
var api = require('./api/index');
//const multer = require('koa-multer');//加载koa-multer模块
//var upload_controller = require('../app/controllers/upload_controller');
////文件上传
////配置
//var storage = multer.diskStorage({
////文件保存路径
//destination: function (req, file, cb) {
//  cb(null, '../files/uploads/')
//},
////修改文件名称
//filename: function (req, file, cb) {
//  var fileFormat = (file.originalname).split(".");
//  cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
//}
//})
////加载配置
//var upload = multer({ storage: storage });
//router.post('/upload1',upload.single('file'), upload_controller.upload1);

router.use('/api', api.routes(), api.allowedMethods());

module.exports = router;