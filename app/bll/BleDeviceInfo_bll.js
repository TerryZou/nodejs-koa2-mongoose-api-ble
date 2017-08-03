const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const BleDeviceInfo = require("../models/BleDeviceInfo_model");
const xlsx = require("../../utils/excel_util");
const pathconfig = require("../../config/path_config");

//查询各个用户对应测试环境列表
exports.getEvnbyUserid = async(userid) => {
	try {
		var params = [{
			'$match': {
				userid: userid
			}
		}, {
			'$group': {
				_id: {
					"flag": '$flag'
				}
			}
		}];
		var data = await BleDeviceInfo().aggregate(params);
		return data;
	} catch(e) {
		throw e;
	}
};

//查询设备测试设备列表
exports.getDevices = async(userid, flag) => {
	try {
		var params = [{
			'$match': {
				userid: userid,
				flag: flag
			}
		}, {
			'$group': {
				_id: {
					"name": '$name',
					'mac': '$mac'
				}
			}
		}];
		var data = await BleDeviceInfo().aggregate(params);
		return data;
	} catch(e) {
		throw e;
	}
};