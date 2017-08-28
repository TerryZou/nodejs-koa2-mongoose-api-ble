var conn = require('../dbconnect/dbconnect');
var base = require("./base");

// model.js
var Schema = conn.Schema,
	ObjectId = Schema.Types.ObjectId;

// 模型
var BleScanRecordSchema = new Schema({
	"mac": String,
	"name": String,
	"RSSI": Number,
	"time": Number,
	"flag": String,
	"mi": Number,
	"mobile": String,
	"datetime": Date,
	"userid": String,
}, {
	versionKey: false
});

module.exports = () => {
	var BleScanRecord = base.model('BleScanRecord', BleScanRecordSchema);
	BleScanRecord.getResultBySearch = async(field, params) => {
		var o = {};
		switch(field) {
			case 'RSSI':
				o.map = function() {
					emit({
						'flag': this.flag
					}, this.RSSI)
				}
				break;
		}
		o.reduce = function(k, values) {
			return Variance(k, values);
		};
		o.query = params;
		var result = await BleScanRecord.mapReduce(o);
		return result;
	};
	return BleScanRecord;
};