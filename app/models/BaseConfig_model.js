var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 模型
var BaseConfigSchema = new Schema({
	"host": String,
	"port": String,
	"userid": String
}, {
	versionKey: false
});

module.exports = () => {
	return base.model('BaseConfig', BaseConfigSchema);
};