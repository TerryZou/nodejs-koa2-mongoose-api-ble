const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const test = require("../bll/test_bll");
const importbll = require("../bll/import_bll");

exports.ble_connect = async(ctx, next) => {
	var codes = apiCode.upload_bleconnect.codes;
	var result = new Object();
	var userid = ctx.req.body.userid;

	var isgo = true;
	try {
		var filename = ctx.req.file.filename;
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(filename)) {
			result.status = codes.paramerror;
			result.status.details = "参数 file 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await importbll.connect_import(userid, filename);
			switch(data.status) {
				case 0:
					result.status = codes.success;
					break;
				case 2:
					result.status = codes.nodata;
					break;
				case 3:
					result.status = codes.dberror;
					break;
				case -1:
					result.status = codes.error;
					break;
			}
		}
	} catch(e) {
		console.log(e);
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};