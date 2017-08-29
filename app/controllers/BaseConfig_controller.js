const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const BaseConfig = require("../bll/BaseConfig_bll");

//新增url
exports.add_url = async(ctx, next) => {
	var codes = apiCode.baseconfig_add_url.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		var port = ctx.request.body.port;
		var host = ctx.request.body.host;
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(port)) {
			result.status = codes.paramerror;
			result.status.details = "参数 port 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(host)) {
			result.status = codes.paramerror;
			result.status.details = "参数 host 不能缺少或为空！";
			isgo = false;
		}
		
		//验证是否存在
		if(isgo) {
			var data = await BaseConfig.getByUserId(userid);
			switch(data.status) {
				case 1:
					result.status = codes.exist;
					isgo = false;
					break;
				case 0:
					break;
				case -1:
					result.status = codes.syserror;
					isgo = false;
					break;
			}
		}
		if(isgo) {
			var data = await BaseConfig.add({
				userid:userid,
				host:host,
				port:port
			});
			switch(data.status) {
				case 1:
					result.data = data.id;
					result.status = codes.success;
					break;
				case 0:
				case -1:
					result.status = codes.syserror;
					isgo = false;
					break;
			}
		}
	} catch(e) {
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};

//通过userid获取url
exports.get_url = async(ctx, next) => {
	var codes = apiCode.baseconfig_get_url.codes;
	var result = new Object();
	var isgo=true;
	try {
		var userid = ctx.request.body.userid;
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}
		if(isgo)  {
			var data = await BaseConfig.getByUserId(userid);
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

//通过userid修改url
exports.set_url = async(ctx, next) => {
	var codes = apiCode.baseconfig_set_url.codes;
	var result = new Object();
	var isgo=true;
	try {
		var userid = ctx.request.body.userid;
		var port = ctx.request.body.port;
		var host = ctx.request.body.host;
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(port)) {
			result.status = codes.paramerror;
			result.status.details = "参数 port 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(host)) {
			result.status = codes.paramerror;
			result.status.details = "参数 host 不能缺少或为空！";
			isgo = false;
		}
		//验证用id不能为空
		if(isgo) {
			var data = await BaseConfig.updateByUserId(userid, {
				"host": host,
				"port": port
			});
			switch(data.status) {
				case 1:
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nochange;
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

//ble_del_distance
exports.del_url = async(ctx, next) => {
	var codes = apiCode.baseconfig_del_url.codes;
	var result = new Object();
	var isgo = true;
	try {
		var userid = ctx.request.body.userid;
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BaseConfig.getByUserId(userid);
			switch(data.status) {
				case 1:
					break;
				case 0:
					result.status = codes.noexist;
					isgo = false;
					break;
				case -1:
					result.status = codes.syserror;
					isgo = false;
					break;
			}
		}
		if(isgo) {
			var data = await BaseConfig.deleteUrl({
				userid: userid
			});
			switch(data.status) {
				case 1:
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.noexist;
					isgo = false;
					break;
				case -1:
					result.status = codes.syserror;
					isgo = false;
					break;
			}
		}
	} catch(e) {
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};