const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const BaseConfig = require("../bll/BaseConfig_bll");

//通过userid获取url
exports.get_url = async(ctx, next) => {
	var codes = apiCode.baseconfig_get_url.codes;
	var result = new Object();
	try {
		var userid = ctx.request.body.userid;
		//验证用id不能为空
		if(jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
		} else {
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
	try {
		var userid = ctx.request.body.userid;
		var port = ctx.request.body.port;
		var host = ctx.request.body.host;
		console.log(userid);
		console.log(port);
		console.log(host);
		//验证用id不能为空
		if(jsUtil.isNullOrEmpty(userid) ||
			jsUtil.isNullOrEmpty(port) ||
			jsUtil.isNullOrEmpty(host)
		) {
			result.status = codes.paramerror;
		} else {
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