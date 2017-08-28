const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const BtConnectTimers = require("../models/BtConnectTimers_model");
const BtConnectStatistics = require("../models/BtConnectStatistics_model");
const xlsx = require("../../utils/excel_util");
const pathconfig = require("../../config/path_config");

//通过条件获取链接记录列表
exports.getRecordsBySearch = async(search) => {
	var result = await queryRecords(search);
	return result;
};
//通过条件导出链接记录
exports.exportRecords = async(search) => {
	var result = {
		succ: false,
		data: null,
		status: 1
	};
	var data = await queryRecords(search);
	result.status = data.status;
	if(data.status == 1) {
		var headers = [{
			name: "btcon",
			headers: [{
					'f': '_id',
					'h': 'Id'
				},
				{
					'f': 'name',
					'h': '设别名称'
				},
				{
					'f': 'mac',
					'h': 'mac'
				},

				{
					'f': 'ConnectionTime',
					'h': '连接时间'
				},
				{
					'f': 'DisconnectTime',
					'h': '断开时间'
				},
				{
					'f': 'mi',
					'h': '距离'
				},
				{
					'f': 'flag',
					'h': '组'
				},
				{
					'f': 'time',
					'h': '记录时间'
				},
				{
					'f': 'isConnect',
					'h': '连接状态'
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
		if(!jsUtil.isNullOrEmpty(search.flag)) {
			params["flag"] = search.flag;
		}
		if(!jsUtil.isNullOrEmpty(search.userid)) {
			params["userid"] = search.userid;
		}
		params["isConnect"] = 1;
		result = await BtConnectTimers().query(params);
		return result;
	} catch(e) {
		throw e;
	}
};

//通过条件获取链接记录列表
exports.getRecordsListBySearchs = async(searchs) => {
	var result = await queryRecordsList(searchs);
	return result;
};
//通过条件导出链接记录
exports.exportRecordsList = async(searchs) => {
	var result = {
		succ: false,
		data: null,
		status: 1
	};
	var data = await queryRecordsList(searchs);
	result.status = data.status;
	if(data.status == 1) {
		var headers = new Array();
		var datas = new Array();
		for(var i = 0; i < data.data.length; i++) {
			headers.push({
				name: "btcon" + i,
				headers: [{
					'f': '_id',
					'h': 'Id'
				},
				{
					'f': 'name',
					'h': '设别名称'
				},
				{
					'f': 'mac',
					'h': 'mac'
				},

				{
					'f': 'ConnectionTime',
					'h': '连接时间'
				},
				{
					'f': 'DisconnectTime',
					'h': '断开时间'
				},
				{
					'f': 'mi',
					'h': '距离'
				},
				{
					'f': 'flag',
					'h': '组'
				},
				{
					'f': 'time',
					'h': '记录时间'
				},
				{
					'f': 'isConnect',
					'h': '连接状态'
				}
				]
			});
			datas.push(data.data[i]);
		}
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

async function queryRecordsList(searchs) {
	var result = {
		data: {},
		succ: true,
		status: 1,
		param: {}
	};
	var array = new Array();
	for(var i = 0; i < searchs.length; i++) {
		var r = await queryRecords(searchs[i]);
		if(r.status == 1) {
			array.push(r.data);
		} else {
			result.status = r.status;
			result.param = searchs[i];
			break;
		}
	}
	if(result.status == 1) {
		result.data = array;
	}
	return result;
};

//通过条件获取链接结果
exports.getResultBySearch = async(search) => {
	var result = await queryResult(search);
	return result;
};

//通过条件导出链接结果
exports.exportResult = async(search) => {
	var result = {
		succ: false,
		data: null,
		status: 1
	};
	var data = await queryResult(search);
	result.status = data.status;
	if(data.status == 1) {
		var headers = [{
			name: "btconresult",
			headers: [{
					'f': 'name',
					'h': "设备名称"
				},
				{
					'f': 'mac',
					'h': "mac"
				},
				{
					'f': 'connect_success_rate',
					'h': "连接设备成功率"
				},
				{
					'f': 'disconnect_success_rate',
					'h': "断开设备成功率"
				},
				{
					'f': 'min_connect',
					'h': "连接最小时间（ms）"
				},
				{
					'f': 'max_connect',
					'h': "连接最大时间（ms）"
				},
				{
					'f': 'avg_connect',
					'h': "连接平均时间（ms）"
				},
				{
					'f': 'var_connect',
					'h': "连接时间方差"
				},
				{
					'f': 'dc_failed_number',
					'h': "断开失败次数"
				},
				{
					'f': 'bt_up_failed_number',
					'h': "蓝牙启动失败次数"
				},
				{
					'f': 'flag',
					'h': "组 "
				},
				{
					'f': 'success_rate',
					'h': "成功率"
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

async function queryResult(search) {
	var result = {
		data: {},
		succ: true,
		status: 1
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
			match["mi"] = Number.parseFloat(search.mi);
		}
		if(!jsUtil.isNullOrEmpty(search.userid)) {
			match["userid"] = search.userid;
		}
		if(jsUtil.isNullOrEmpty(search.connect_num)) {
			search.connect_num = 1;
		} else {
			search.connect_num = Number.parseInt(search.connect_num);
		}

		var r = {};
		var s = await BtConnectStatistics().findOne(match);
		switch(s.status) {
			case 1:
				r['name'] = s.data.name;
				r['mac'] = s.data.mac;
				r['flag'] = s.data.flag;
				r['connect_success_rate'] = s.data.cc_success / search.connect_num;
				r['disconnect_success_rate'] = s.data.dc_success / s.data.cc_success;
				r['success_rate'] = s.data.cc_success / search.connect_num;
				r['dc_failed_number'] = s.data.dc_failed;
				r['bt_up_failed_number'] = s.data.deviceup_failed;
				break;
			case 0:
				result.status = 10;
				result.succ = false;
				break;
			case -1:
				result.status = -11;
				result.succ = false;
				break;
		}

		//链接，扫描获取最大最小平均值
		if(result.succ) {
			var params = [{
				'$match': match
			}, {
				'$group': {
					_id: "$flag",
					avg_connect: {
						'$avg': '$ConnectionTime'
					},
					min_connect: {
						'$min': '$ConnectionTime'
					},
					max_connect: {
						'$max': '$ConnectionTime'
					}
				}
			}];
			var r1 = await BtConnectTimers().aggregate(params);
			if(r1.status == 1) {
				//result.data = r1.data;
				r['avg_connect'] = r1.data[0].avg_connect;
				r['min_connect'] = r1.data[0].min_connect;
				r['max_connect'] = r1.data[0].max_connect;

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
		if(result.succ) {
			var c_match = match;
			c_match.isConnect = 1;
			var connect_v = await BtConnectTimers().getResultBySearch('ConnectionTime', c_match);
			if(connect_v.status == 1) {
				r['var_connect'] = connect_v.data[0].value;
			} else {
				switch(connect_v.status) {
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

//通过条件获取链接结果
exports.getResultsBySearchs = async(searchs) => {
	var result = await queryResults(searchs);
	return result;
};
//通过条件导出链接结果
exports.exportResults = async(searchs) => {
	var result = {
		succ: false,
		data: null,
		status: 1
	};
	var data = await queryResults(searchs);
	result.status = data.status;
	if(data.status == 1) {
		var headers = [{
			name: "btconnectresult",
			headers: [{
					'f': 'name',
					'h': "设备名称"
				},
				{
					'f': 'mac',
					'h': "mac"
				},
				{
					'f': 'connect_success_rate',
					'h': "连接设备成功率"
				},
				{
					'f': 'disconnect_success_rate',
					'h': "断开设备成功率"
				},
				{
					'f': 'min_connect',
					'h': "连接最小时间（ms）"
				},
				{
					'f': 'max_connect',
					'h': "连接最大时间（ms）"
				},
				{
					'f': 'avg_connect',
					'h': "连接平均时间（ms）"
				},
				{
					'f': 'var_connect',
					'h': "连接时间方差"
				},
				{
					'f': 'dc_failed_number',
					'h': "断开失败次数"
				},
				{
					'f': 'bt_up_failed_number',
					'h': "蓝牙启动失败次数"
				},
				{
					'f': 'flag',
					'h': "组 "
				},
				{
					'f': 'success_rate',
					'h': "成功率"
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

async function queryResults(searchs) {
	var result = {
		data: {},
		succ: true,
		status: 1,
		param: {}
	};
	var array = new Array();
	for(var i = 0; i < searchs.length; i++) {
		var r = await queryResult(searchs[i]);
		if(r.status == 1) {
			array.push(r.data[0]);
		} else {
			result.status = r.status;
			result.param = searchs[i];
			break;
		}
	}
	if(result.status == 1) {
		result.data = array;
	}
	return result;
}