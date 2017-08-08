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
		var match={};
		if(!jsUtil.isNullOrEmpty(userid)) {
			match['userid'] = userid;
		}
		if(!jsUtil.isNullOrEmpty(flag)) {
			match['flag'] = flag;
		}
		var params = [{
			'$match': match
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

//查询设备测试设备名称列表
exports.getNamesbyUseridFlag = async(userid, flag) => {
	try {
		var params = [{
			'$match': {
				userid: userid,
				flag: flag
			}
		}, {
			'$group': {
				_id: {
					"name": '$name'
				}
			}
		}];
		var data = await BleDeviceInfo().aggregate(params);
		return data;
	} catch(e) {
		throw e;
	}
};

//查询设备测试设备mac列表
exports.getMacsbyUseridFlagName = async(userid, flag,name) => {
	try {
		var params = [{
			'$match': {
				userid: userid,
				flag: flag,
				name:name
			}
		}, {
			'$group': {
				_id: {
					"mac": '$mac'
				}
			}
		}];
		var data = await BleDeviceInfo().aggregate(params);
		return data;
	} catch(e) {
		throw e;
	}
};