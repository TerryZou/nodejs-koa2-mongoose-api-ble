var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 模型
var FileInfoSchema = new Schema({
	"name": String,
	"userid": String,
	"type":Number,
	"recordtime": Number
}, {
	versionKey: false
});

module.exports = () => {
	return base.model('FileInfo', FileInfoSchema);
};