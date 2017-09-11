const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const test = require("../bll/test_bll");
const importbll = require("../bll/import_bll");

exports.connect = async(ctx, next) => {
	var codes = apiCode.baseconfig_del_url.codes;
	var result = new Object();
	var userid = ctx.request.body.userid;
	var isgo = true;
	try {
		var filename = ctx.req.file.filename;
		var datas=await test.upload1(filename);
		await importbll.connect_import(userid,filename);
		result.status=codes.success;
		result.status.details=datas;
	} catch(e) {
		console.log(e);
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};