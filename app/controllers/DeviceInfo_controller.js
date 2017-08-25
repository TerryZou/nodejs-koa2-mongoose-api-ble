const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const DeviceInfo = require("../bll/DeviceInfo_bll");

//查询各个用户对应测试环境列表
exports.env_query = async(ctx, next) => {
	var codes = apiCode.ble_env_query.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		var type = ctx.request.body.type;
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(userid) ) {
			result.status = codes.paramerror;
			result.status.details="参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(type) ) {
			result.status = codes.paramerror;
			result.status.details="参数 type 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await DeviceInfo.getEvnbyUserid(userid,type);
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
exports.device_query = async(ctx, next) => {
	var codes = apiCode.ble_device_query.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		var flag = ctx.request.body.flag;
		var type = ctx.request.body.type;
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(userid) ) {
			result.status = codes.paramerror;
			result.status.details="参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//这里不要flag，但不知道为什么，总是不要
//		//验证参数是否正确
//		if(isgo &&jsUtil.isNullOrEmpty(flag) ) {
//			result.status = codes.paramerror;
//			result.status.details="参数 flag 不能缺少或为空！";
//			isgo = false;
//		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(type) ) {
			result.status = codes.paramerror;
			result.status.details="参数 type 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await DeviceInfo.getDevices(userid, flag,type);
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
exports.name_query = async(ctx, next) => {
	var codes = apiCode.ble_name_query.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		var flag = ctx.request.body.flag;
		var type = ctx.request.body.type;
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
		if(isgo &&jsUtil.isNullOrEmpty(type) ) {
			result.status = codes.paramerror;
			result.status.details="参数 type 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await DeviceInfo.getNamesbyUseridFlag(userid, flag,type);
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
exports.mac_query = async(ctx, next) => {
	var codes = apiCode.ble_mac_query.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		var flag = ctx.request.body.flag;
		var name=ctx.request.body.name;
		var type=ctx.request.body.type;
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
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(type) ) {
			result.status = codes.paramerror;
			result.status.details="参数 type 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await DeviceInfo.getMacsbyUseridFlagName(userid, flag,name,type);
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
