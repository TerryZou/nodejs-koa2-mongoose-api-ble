var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 模型
var BtConnectStatisticsSchema = new Schema({
	mac: String,
	flag: String,
	name: String,
	mi: Number,
	mobile: String,
	userid: String,
	dc_failed: Number,
	dc_success: Number,
	cc_failed: Number,
	cc_success: Number,
	devicedown_success: Number,
	devicedown_failed: Number,
	deviceup_success: Number,
	deviceup_failed: Number
}, {
	versionKey: false
});

module.exports = () => {
	return base.model('BtConnectStatistics', BtConnectStatisticsSchema);
};