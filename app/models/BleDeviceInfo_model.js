var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 模型
var BleDeviceInfoSchema = new Schema({
	"mobile": String,
	"scan_interval": String,
	"scan_window": String,
	"connect_interval": String,
	"connect_window": String,
	"connect_min_interval": String,
	"connect_max_interval": String
}, {
	versionKey: false
});

module.exports = () => {
	return base.model('BleDeviceInfo', BleDeviceInfoSchema);
};