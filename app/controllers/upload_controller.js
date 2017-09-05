const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
//const BaseConfig = require("../bll/BaseConfig_bll");

exports.upload1 = async(ctx, next) => {
	console.log("upload");
	var codes = apiCode.baseconfig_del_url.codes;
	var result = new Object();
	var isgo = true;
	try {
		//var filename = ctx.req.file.filename;
		result.status=codes.success;
		//result.status.details=filename;
	} catch(e) {
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};