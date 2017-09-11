var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 模型
var DeviceInfoSchema = new Schema({
	"mac" : String,
    "name" : String,
    "RSSI" : Number,
    "time" : Number,
    "flag" : String,
    "datetime" :Date,
    "userid" : String,
	"type":Number
}, {
	versionKey: false
});

module.exports = () => {
	return base.model('DeviceInfo', DeviceInfoSchema);
};