const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const BleScan = require("../bll/BleScan_bll");

//查询扫描测试记录
exports.ble_scan_query = async(ctx, next) => {
	var codes = apiCode.ble_scan_query.codes;
	var result = new Object();
	try {
		var mac = ctx.request.body.mac;
		var name = ctx.request.body.name;
		var mi = ctx.request.body.mi;
		var mobile = ctx.request.body.mobile;
		var flag = ctx.request.body.flag;
		var userid = ctx.request.body.userid;
		var isgo = true;
		//验证参数是否正确
		if(isgo &&
			(
				jsUtil.isNullOrEmpty(flag) ||
				jsUtil.isNullOrEmpty(name) ||
				jsUtil.isNullOrEmpty(mi) ||
				jsUtil.isNullOrEmpty(mobile) ||
				jsUtil.isNullOrEmpty(mac) ||
				jsUtil.isNullOrEmpty(userid)
			)) {
			result.status = codes.paramerror;
			isgo = false;
		}
		if(isgo) {
			var data = await BleScan.getRecordsBySearch({
				mac: mac,
				name: name,
				mi: mi,
				mobile: mobile,
				flag: flag,
				userid: userid
			});
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
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

//查询连接测试记录导出
exports.ble_scan_export = async(ctx, next) => {
	var codes = apiCode.ble_scan_export.codes;
	var result = new Object();
	try {
		var mac = ctx.request.body.mac;
		var name = ctx.request.body.name;
		var mi = ctx.request.body.mi;
		var mobile = ctx.request.body.mobile;
		var flag = ctx.request.body.flag;
		var userid = ctx.request.body.userid;
		var isgo = true;
		//验证参数是否正确
		if(isgo &&
			(
				jsUtil.isNullOrEmpty(flag) ||
				jsUtil.isNullOrEmpty(name) ||
				jsUtil.isNullOrEmpty(mi) ||
				jsUtil.isNullOrEmpty(mobile) ||
				jsUtil.isNullOrEmpty(mac) ||
				jsUtil.isNullOrEmpty(userid)
			)) {
			result.status = codes.paramerror;
			isgo = false;
		}
		if(isgo) {
			var data = await BleScan.exportRecords({
				mac: mac,
				name: name,
				mi: mi,
				mobile: mobile,
				flag: flag,
				userid: userid
			});
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
					isgo = false;
					break;
				case 2:
					result.status = codes.exporterror;
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

//查询连接测试结论
exports.ble_scan_result = async(ctx, next) => {
	var codes = apiCode.ble_scan_result.codes;
	var result = new Object();
	try {
		var mac = ctx.request.body.mac;
		var name = ctx.request.body.name;
		var mi = ctx.request.body.mi;
		var mobile = ctx.request.body.mobile;
		var flag = ctx.request.body.flag;
		var userid = ctx.request.body.userid;
		var isgo = true;
		//验证参数是否正确
		if(isgo &&
			(
				jsUtil.isNullOrEmpty(flag) ||
				jsUtil.isNullOrEmpty(name) ||
				jsUtil.isNullOrEmpty(mi) ||
				jsUtil.isNullOrEmpty(mobile) ||
				jsUtil.isNullOrEmpty(mac) ||
				jsUtil.isNullOrEmpty(userid)
			)) {
			result.status = codes.paramerror;
			isgo = false;
		}
		if(isgo) {
			var data = await BleScan.getResultBySearch({
				mac: mac,
				name: name,
				mi: mi,
				mobile: mobile,
				flag: flag,
				userid: userid
			});
			console.log(data);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
				case 10:
				case 20:
				case 30:
					result.status = codes.nodata;
					isgo = false;
					break;
				case -1:
				case -11:
				case -12:
				case -13:
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

//查询连接测试结论导出
exports.ble_scan_result_export = async(ctx, next) => {
	var codes = apiCode.ble_scan_result_export.codes;
	var result = new Object();
	try {
		var mac = ctx.request.body.mac;
		var name = ctx.request.body.name;
		var mi = ctx.request.body.mi;
		var mobile = ctx.request.body.mobile;
		var flag = ctx.request.body.flag;
		var userid = ctx.request.body.userid;
		var isgo = true;
		//验证参数是否正确
		if(isgo && (
				jsUtil.isNullOrEmpty(flag) ||
				jsUtil.isNullOrEmpty(mac) ||
				jsUtil.isNullOrEmpty(name) ||
				jsUtil.isNullOrEmpty(mi) ||
				jsUtil.isNullOrEmpty(mobile) ||
				jsUtil.isNullOrEmpty(userid)
			)) {
			result.status = codes.paramerror;
			isgo = false;
		}
		if(isgo) {
			var data = await BleScan.exportResults({
				mac: mac,
				name: name,
				mi: mi,
				mobile: mobile,
				flag: flag,
				userid: userid
			});
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
					isgo = false;
					break;
				case 2:
					result.status = codes.exporterror;
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

//查询新增扫描记录
exports.ble_scan_queryonce = async(ctx, next) => {
	var codes = apiCode.ble_scan_queryonce.codes;
	var result = new Object();
	try {
		var mac = ctx.request.body.mac;
		var name = ctx.request.body.name;
		var mi = ctx.request.body.mi;
		var mobile = ctx.request.body.mobile;
		var flag = ctx.request.body.flag;
		var userid = ctx.request.body.userid;
		var isgo = true;
		//验证参数是否正确
		if(isgo &&
			(
				jsUtil.isNullOrEmpty(flag) ||
				jsUtil.isNullOrEmpty(name) ||
				jsUtil.isNullOrEmpty(mi) ||
				jsUtil.isNullOrEmpty(mobile) ||
				jsUtil.isNullOrEmpty(mac) ||
				jsUtil.isNullOrEmpty(userid)
			)) {
			result.status = codes.paramerror;
			isgo = false;
		}
		if(isgo) {
			var data = await BleScan.getLastRecord({
				mac: mac,
				name: name,
				mi: mi,
				mobile: mobile,
				flag: flag,
				userid: userid
			});
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
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