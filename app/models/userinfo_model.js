var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 用户模型
var userSchema = new Schema({
	username: String, // 用户昵称
	password: String
}, {
	versionKey: false
});

module.exports = () => {
	return base.model('UserInfo', userSchema);
};