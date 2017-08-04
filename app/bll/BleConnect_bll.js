const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const BleConnectTimers = require("../models/BleConnectTimers_model");
const BleConnectStatistics = require("../models/BleConnectStatistics_model");
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
		status:1
	};
	var data = await queryRecords(search);
	result.status = data.status;
	if(data.status == 1) {
		var headers = [{
			name: "blecon",
			headers: [{
					'f': '_id',
					'h': 'Id'
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
					'f': 'LescanTime',
					'h': '扫描时间'
				},
				{
					'f': 'RSSI',
					'h': '信号强度'
				},
				{
					'f': 'flag',
					'h': '组'
				},
				{
					'f': 'isConnect',
					'h': '是否连接'
				},
				{
					'f': 'mac',
					'h': 'mac'
				},
				{
					'f': 'mi',
					'h': '距离'
				},
				{
					'f': 'mobile',
					'h': '手机型号'
				},
				{
					'f': 'name',
					'h': '设别名称'
				},
				{
					'f': 'time',
					'h': '时间'
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
		if(!jsUtil.isNullOrEmpty(search.mobile)) {
			params["mobile"] = search.mobile;
		}
		if(!jsUtil.isNullOrEmpty(search.flag)) {
			params["flag"] = search.flag;
		}
		if(!jsUtil.isNullOrEmpty(search.userid)) {
			params["userid"] = search.userid;
		}
		result = await BleConnectTimers().query(params);
		return result;
	} catch(e) {
		throw e;
	}
};

//通过条件获取链接结果
exports.getResultBySearch = async(search) => {
	var result = await queryResults(search);
	return result;
};

//通过条件导出链接结果
exports.exportResults = async(search) => {
	var result = {
		succ: false,
		data: null,
		status:1
	};
	var data = await queryResults(search);
	result.status = data.status;
	if(data.status == 1) {
		var headers = [{
			name: "bleconresult",
			headers: [{
					'f': 'name',
					'h': "设备名称"
				},
				{
					'f': 'mac',
					'h': "mac"
				},
				{
					'f': 'scan_success_rate',
					'h': "扫描设备成功率"
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
					'f': 'min_scan',
					'h': "扫描最小时间（ms）"
				},
				{
					'f': 'max_scan',
					'h': "扫描最大时间（ms）"
				},
				{
					'f': 'avg_scan',
					'h': "扫描平均时间（ms）"
				},
				{
					'f': 'var_scan',
					'h': "扫描时间方差"
				},
				{
					'f': 'min_rssi',
					'h': "RSSI最小值"
				},
				{
					'f': 'max_rssi',
					'h': "RSSI最大值"
				},
				{
					'f': 'avg_rssi',
					'h': "信号强度方差"
				},
				{
					'f': 'var_rssi',
					'h': "mac"
				},
				{
					'f': 'ledc_failed_number',
					'h': "断开失败次数"
				},
				{
					'f': 'ble_up_failed_numpber',
					'h': "蓝牙启动失败次数"
				},
				{
					'f': 'scan_failed_number',
					'h': "扫描失败次数"
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

async function queryResults(search) {
	var result = {
		data: {},
		succ: true,
		status:1
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
		if(!jsUtil.isNullOrEmpty(search.mobile)) {
			match["mobile"] = search.mobile;
		}
		if(!jsUtil.isNullOrEmpty(search.userid)) {
			match["userid"] = search.userid;
		}
		if(jsUtil.isNullOrEmpty(search.connect_num)) {
			search.connect_num = 1;
		}

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
				},
				avg_scan: {
					'$avg': '$LescanTime'
				},
				min_scan: {
					'$min': '$LescanTime'
				},
				max_scan: {
					'$max': '$LescanTime'
				},
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
		var r = {};
		var s = await BleConnectStatistics().findOne(match);
		switch(s.status) {
			case 1:
				r['name'] = s.data.name;
				r['mac'] = s.data.mac;
				r['flag'] = s.data.flag;
				r['mobile'] = s.data.mobile;
				r['scan_success_rate'] = s.data.lescan_success / search.connect_num;
				r['connect_success_rate'] = s.data.lecc_success / s.data.lescan_success;
				r['disconnect_success_rate'] = s.data.ledc_success / s.data.lecc_success;
				r['ledc_failed_number'] = s.data.ledc_failed;
				r['ble_up_failed_numpber'] = s.data.deviceup_failed;
				r['scan_failed_number'] = s.data.lescan_failed;
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

		//获取最大最小平均值
		if(result.succ) {
			var r1 = await BleConnectTimers().aggregate(params);
			if(r1.status == 1) {
				//result.data = r1.data;
				r['avg_connect'] = r1.data[0].avg_connect;
				r['min_connect'] = r1.data[0].min_connect;
				r['max_connect'] = r1.data[0].max_connect;
				r['avg_scan'] = r1.data[0].avg_scan;
				r['min_scan'] = r1.data[0].min_scan;
				r['max_scan'] = r1.data[0].max_scan;
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
			var connect_v = await BleConnectTimers().getResultBySearch('ConnectionTime', match);
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
		//获取扫描时间方差
		if(result.succ) {
			var scan_v = await BleConnectTimers().getResultBySearch('LescanTime', match);
			if(scan_v.status == 1) {
				r['var_scan'] = scan_v.data[0].value;
			} else {
				switch(scan_v.status) {
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
		//获取信号时间方差
		if(result.succ) {
			var rssi_v = await BleConnectTimers().getResultBySearch('RSSI', match);
			if(rssi_v.status == 1) {
				r['var_rssi'] = rssi_v.data[0].value;
			} else {
				switch(rssi_v.status) {
					case 0:
						result.status = 50;
						break;
					case -1:
						result.status = -15;
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