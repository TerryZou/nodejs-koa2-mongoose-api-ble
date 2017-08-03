var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 用户模型
var BleConnectTimersSchema = new Schema({
	mac: String,
	ConnectionTime: Number,
	DisconnectTime: Number,
	flag: String,
	name: String,
	mi: Number,
	time: Number,
	mobile: String,
	data: String,
	LescanTime: Number,
	RSSI: Number,
	isConnect: Number,
	result: String,
	mark: String,
	isDiscover: Number,
	status: String,
	userid: String,
	isLescan: Number
}, {
	versionKey: false
});

module.exports = () => {
	//Model
	var BleConnectTimers = base.model('BleConnectTimers', BleConnectTimersSchema);
	BleConnectTimers.getResultBySearch = async(field, params) => {
		var o = {};
		switch(field) {
			case 'ConnectionTime':
				o.map = function() {
					emit({
						'flag': this.flag
					}, this.ConnectionTime)
				}
				break;
			case 'RSSI':
				o.map = function() {
					emit({
						'flag': this.flag
					}, this.RSSI)
				}
				break;
			case 'LescanTime':
				o.map = function() {
					emit({
						'flag': this.flag
					}, this.LescanTime)
				}
				break;
		}
		o.reduce = function(k, values) {
			return Variance(k, values);
		};
		o.query = params;
		var result = await BleConnectTimers.mapReduce(o);
		return result;
	};
	return BleConnectTimers;
};