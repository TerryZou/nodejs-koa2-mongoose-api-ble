const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const BleDeviceInfo = require("../bll/BleDeviceInfo_bll");

//查询各个用户对应测试环境列表
exports.ble_env_query = async(ctx, next) => {
	var codes = apiCode.ble_env_query.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(userid) ) {
			result.status = codes.paramerror;
			result.status.details="参数 userid 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleDeviceInfo.getEvnbyUserid(userid);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
					break;
				case -1:
					result.status = codes.syserror;
					break;
			}
		}
	} catch(e) {
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};

//查询设备测试设备列表
exports.ble_device_query = async(ctx, next) => {
	var codes = apiCode.ble_device_query.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		var flag = ctx.request.body.flag;
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(userid) ) {
			result.status = codes.paramerror;
			result.status.details="参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(flag) ) {
			result.status = codes.paramerror;
			result.status.details="参数 flag 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleDeviceInfo.getDevices(userid, flag);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
					break;
				case -1:
					result.status = codes.syserror;
					break;
			}
		}
	} catch(e) {
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};

//查询设备测试设备名称列表
exports.ble_name_query = async(ctx, next) => {
	var codes = apiCode.ble_name_query.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		var flag = ctx.request.body.flag;
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(userid) ) {
			result.status = codes.paramerror;
			result.status.details="参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(flag) ) {
			result.status = codes.paramerror;
			result.status.details="参数 flag 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleDeviceInfo.getNamesbyUseridFlag(userid, flag);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
					break;
				case -1:
					result.status = codes.syserror;
					break;
			}
		}
	} catch(e) {
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};

//查询设备测试设备mac列表
exports.ble_mac_query = async(ctx, next) => {
	var codes = apiCode.ble_mac_query.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		var flag = ctx.request.body.flag;
		var name=ctx.request.body.name;
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(userid) ) {
			result.status = codes.paramerror;
			result.status.details="参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(flag) ) {
			result.status = codes.paramerror;
			result.status.details="参数 flag 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(name) ) {
			result.status = codes.paramerror;
			result.status.details="参数 name 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleDeviceInfo.getMacsbyUseridFlagName(userid, flag,name);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
					break;
				case -1:
					result.status = codes.syserror;
					break;
			}
		}
	} catch(e) {
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};
