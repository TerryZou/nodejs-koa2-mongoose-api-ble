const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const test = require("../bll/test_bll");

exports.upload1 = async(ctx, next) => {
	var codes = apiCode.baseconfig_del_url.codes;
	var result = new Object();
	var isgo = true;
	try {
		var filename = ctx.req.file.filename;
		var datas=await test.upload1(filename);
		console.log(datas);
		result.status=codes.success;
		result.status.details=datas;
	} catch(e) {
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};