var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 用户模型
var BtConnectTimersSchema = new Schema({
	mac: String,
	ConnectionTime: Number,
	DisconnectTime: Number,
	flag: String,
	name: String,
	mi: Number,
	time: Number,
	mobile: String,
	isConnect: Number
}, {
	versionKey: false
});

module.exports = () => {
	//Model
	var BtConnectTimers = base.model('BtConnectTimers', BtConnectTimersSchema);
	BtConnectTimers.getResultBySearch = async(field, params) => {
		var o = {};
		switch(field) {
			case 'ConnectionTime':
				o.map = function() {
					emit({
						'flag': this.flag
					}, this.ConnectionTime)
				}
				break;
		}
		o.reduce = function(k, values) {
			return Variance(k, values);
		};
		o.query = params;
		var result = await BtConnectTimers.mapReduce(o);
		return result;
	};
	return BtConnectTimers;
};