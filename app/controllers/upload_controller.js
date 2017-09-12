const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const test = require("../bll/test_bll");
const importbll = require("../bll/import_bll");
const FileInfo = require("../bll/FileInfo_bll");

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
			var file_data = await FileInfo.getByName(filename);
			if(file_data.status == "0") {
				var file_entity = {
					"name": filename,
					"userid": userid,
					"type": 1,
					"recordtime": new Date().getTime().toString()
				};
				var file_add_data = await FileInfo.add(file_entity);
				if(file_add_data.status == 1) {
					isgo = true;
				} else {
					result.status = codes.dberror;
					result.details="上传文件添加文件记录错误";
					isgo = false;
				}
			} else if(file_data.status == 1) {
				result.status = codes.fileexist;
				isgo = false;
			} else {
				result.status = codes.dberror;
				result.details="上传文件验证数据哭错误";
				isgo = false;
			}
		}

		if(isgo) {
			var data = await importbll.ble_connect_import(userid, filename);
			switch(data.status) {
				case 0:
					result.status = codes.success;
					break;
				case 2:
					result.status = codes.nodata;
					break;
				case 3:
					result.status = codes.dberror;
					result.details="数据导入数据库错误";
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

exports.ble_scan = async(ctx, next) => {
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
			var data = await importbll.blescan_import(userid, filename);
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