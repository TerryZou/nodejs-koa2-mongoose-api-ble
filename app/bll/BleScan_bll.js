const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const BleScanRecord = require("../models/BleScanRecord_model");
const xlsx = require("../../utils/excel_util");
const pathconfig = require("../../config/path_config");

//通过条件获取扫描记录列表
exports.getRecordsBySearch = async(search) => {
	var result = await queryRecords(search);
	return result;
};

//通过条件导出扫描记录
exports.exportRecords = async(search) => {
	var result = {
		succ: false,
		data: null,
		status:1
	};
	var data = await queryRecords(search);
	result.status = data.status;
	if(data.status == 1) {
		var headers = [{
			name: "blescan",
			headers: [{
					'f': 'mac',
					'h': 'mac'
				},
				{
					'f': 'name',
					'h': 'name'
				},
				{
					'f': 'RSSI',
					'h': '信号强度'
				},
//				{
//					'f': 'time',
//					'h': '连接时长'
//				},
				{
					'f': 'flag',
					'h': '组'
				},
				{
					'f': 'mi',
					'h': '距离'
				},
				{
					'f': 'mobile',
					'h': '手机型号'
				}
			]
		}];
		var datas = [data.data];
		var filename = new Date().getTime().toString() + '.xlsx';
		path = pathconfig.excel + filename;
		result.succ = xlsx.generateExcel(path, headers, datas);
		if(result.succ) {
			result.data = filename;
		} else {
			result.status = 2;
		}
	}
	return result;
};

async function queryRecords(search) {
	var result = null;
	try {
		var params = {};
		if(!jsUtil.isNullOrEmpty(search.mac)) {
			params["mac"] = search.mac.toLowerCase();
		}
		if(!jsUtil.isNullOrEmpty(search.name)) {
			params["name"] = search.name;
		}
		if(!jsUtil.isNullOrEmpty(search.mi)) {
			params["mi"] = search.mi;
		}
		if(!jsUtil.isNullOrEmpty(search.mobile)) {
			params["mobile"] = search.mobile;
		}
		if(!jsUtil.isNullOrEmpty(search.flag)) {
			params["flag"] = search.flag;
		}
		if(!jsUtil.isNullOrEmpty(search.userid)) {
			params["userid"] = search.userid;
		}
		result = await BleScanRecord().query(params);
		return result;
	} catch(e) {
		throw e;
	}
};

//通过条件获取最近扫描记录
exports.getLastRecord = async(search) => {
	var result = null;
	try {
		var params = {};
//		if(!jsUtil.isNullOrEmpty(search.mac)) {
//			params["mac"] = search.mac.toLowerCase();
//		}
//		if(!jsUtil.isNullOrEmpty(search.name)) {
//			params["name"] = search.name;
//		}
		if(!jsUtil.isNullOrEmpty(search.mi)) {
			params["mi"] = search.mi;
		}
		if(!jsUtil.isNullOrEmpty(search.mobile)) {
			params["mobile"] = search.mobile;
		}
		if(!jsUtil.isNullOrEmpty(search.flag)) {
			params["flag"] = search.flag;
		}
		if(!jsUtil.isNullOrEmpty(search.userid)) {
			params["userid"] = search.userid;
		}
		result = await BleScanRecord().query(params, {
			"datetime": -1
		}, 1);
		return result;
	} catch(e) {
		throw e;
	}
};

//通过条件获取扫描结果
exports.getResultBySearch = async(search) => {
	var result = await queryResults(search);
	return result;
};

//通过条件导出扫描结果
exports.exportResults = async(search) => {
	var result = {
		succ: false,
		data: null,
		status:1
	};
	var data= await queryResults(search);
	result.status=data.status;
	if(data.status == 1) {
		var headers = [{
			name: "blescanresult",
			headers: [{
					'f': 'name',
					'h': "设备名称"
				},
				{
					'f': 'mac',
					'h': "mac"
				},
				{
					'f': 'mi',
					'h': "距离"
				},
				{
					'f': 'count',
					'h': "次数"
				},
				
				{
					'f': 'min_rssi',
					'h': "信号强度最小值"
				},
				{
					'f': 'max_rssi',
					'h': "信号强度最大值"
				},
				{
					'f': 'avg_rssi',
					'h': "信号强度方差"
				},
				{
					'f': 'var_time',
					'h': "连接时间方差"
				},
				{
					'f': 'flag',
					'h': "组 "
				},
				{
					'f': 'mobile',
					'h': "手机型号"
				},
				
				
				{
					'f': 'rssi127',
					'h': "127总数"
				}
			]
		}];
		var datas = [data.data];
		var filename = new Date().getTime().toString() + '.xlsx'
		path = pathconfig.excel + filename;
		result.succ = xlsx.generateExcel(path, headers, datas);
		if(result.succ) {
			result.data = filename;
		} else {
			result.status = 2;
		}
	}
	return result;
};

async function queryResults(search) {
	var result = {
		data: {},
		status: 1,
		succ: true
	};
	try {
		var match = {};
		if(!jsUtil.isNullOrEmpty(search.flag)) {
			match['flag'] = search.flag;
		}
		if(!jsUtil.isNullOrEmpty(search.mac)) {
			match["mac"] = search.mac.toLowerCase();
		}
		if(!jsUtil.isNullOrEmpty(search.name)) {
			match["name"] = search.name;
		}
		if(!jsUtil.isNullOrEmpty(search.mi)) {
			match["mi"] = Number.parseInt(search.mi);
		}
		if(!jsUtil.isNullOrEmpty(search.mobile)) {
			match["mobile"] = search.mobile;
		}
		if(!jsUtil.isNullOrEmpty(search.userid)) {
			match["userid"] = search.userid;
		}
		
		var r = {};
		r['name'] = search.name;
		r['mac'] = search.mac;
		r['flag'] = search.flag;
		r['mobile'] = search.mobile;
		r['mi'] =Number.parseInt(search.mi);
		if(result.succ) {
			var r_count = await BleScanRecord().count(match);
			if(r_count.status == 1) {
				r["count"] = r_count.data;
			} else {
				switch(r_count.status) {
					case 10:
						result.status = 10;
						break;
					case -1:
						result.status = -11;
						break;
				}
				result.succ = false;
			}
		}
		//获取最大最小平均值
		if(result.succ) {
			var s_match=match;
			s_match.RSSI={'$ne':127};
			var params = [{
			'$match': s_match
		}, {
			'$group': {
				_id: "$flag",
				avg_rssi: {
					'$avg': '$RSSI'
				},
				min_rssi: {
					'$min': '$RSSI'
				},
				max_rssi: {
					'$max': '$RSSI'
				}
			}
		}];
		
			var r1 = await BleScanRecord().aggregate(params);
			console.log(r1)
			if(r1.status == 1) {
				r['avg_rssi'] = r1.data[0].avg_rssi;
				r['min_rssi'] = r1.data[0].min_rssi;
				r['max_rssi'] = r1.data[0].max_rssi;
			} else {
				switch(r1.status) {
					case 0:
						result.status = 20;
						break;
					case -1:
						result.status = -12;
						break;
				}
				result.succ = false;
			}
		}
		//获取连接时间方差
		if(result.succ) {
			var scan_v = await BleScanRecord().getResultBySearch('Time', match);
			if(scan_v.status) {
				r['var_time'] = scan_v.data[0].value;
			} else {
				switch(r1.status) {
					case 0:
						result.status = 30;
						break;
					case -1:
						result.status = -13;
						break;
				}
				result.succ = false;
			}
		}
		//获取信号127个数
		if(result.succ) {
			var s_match = match;
			s_match.RSSI=127;
			var rssi_v = await BleScanRecord().count(s_match);
			if(rssi_v.status == 1) {
				r['rssi127'] = rssi_v.data;
			} else {
				switch(rssi_v.status) {
					case 0:
						result.status = 40;
						break;
					case -1:
						result.status = -14;
						break;
				}
				result.succ = false;
			}
		}
		if(result.succ) {
			var array = new Array();
			array.push(r);
			result.data = array;
		}
		return result;
	} catch(e) {
		throw e;
	}
};