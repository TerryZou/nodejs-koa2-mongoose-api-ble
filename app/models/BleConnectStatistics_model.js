var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 模型
var BleConnectStatisticsSchema = new Schema({
	mac: String,
	flag: String,
	name: String,
	mi: Number,
	mobile: String,
	userid: String,
	dis_failed: Number,
	dis_success: Number,
	ledc_success: Number,
	ledc_failed: Number,
	ledc_Twice: Number,
	lecc: Number,
	lecc_success: Number,
	lecc_failed: Number,
	lescan: Number,
	lescan_success: Number,
	lescan_failed: Number,
	devicedown_success: Number,
	devicedown_failed: Number,
	deviceup_success: Number,
	deviceup_failed: Number
}, {
	versionKey: false
});

module.exports = () => {
	return base.model('BleConnectStatistics', BleConnectStatisticsSchema);
};