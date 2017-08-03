const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const DistanceInfo = require("../bll/DistanceInfo_bll");

//通过userid获取distance列表 
exports.ble_get_distance = async(ctx, next) => {
	var codes = apiCode.ble_get_distance.codes;
	var result = new Object();
	try {
		var userid = ctx.request.body.userid;
		//验证用id不能为空
		if(jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
		} else {
			var data = await DistanceInfo.getByUserId(userid);
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

//ble_set_distance
exports.ble_set_distance = async(ctx, next) => {
	var codes = apiCode.ble_set_distance.codes;
	var result = new Object();
	var isgo = true;
	try {
		var distance = ctx.request.body.distance;
		var userid = ctx.request.body.userid;
		//验证用户名和密码不能为空
		if(isgo && (jsUtil.isNullOrEmpty(distance) || jsUtil.isNullOrEmpty(userid))) {
			result.status = codes.paramerror;
			isgo = false;
		}
		//验证是否存在
		if(isgo) {
			var data = await DistanceInfo.getByUserIdandDistance(userid, distance);
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
		//添加
		if(isgo) {
			var data = await DistanceInfo.addDistanceInfo({
				userid: userid,
				distance: distance
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

//ble_set_distance
exports.ble_del_distance = async(ctx, next) => {
	var codes = apiCode.ble_del_distance.codes;
	var result = new Object();
	var isgo = true;
	try {
		var distance = ctx.request.body.distance;
		var userid = ctx.request.body.userid;
		if(isgo && (jsUtil.isNullOrEmpty(distance) || jsUtil.isNullOrEmpty(userid))) {
			result.status = codes.paramerror;
			isgo = false;
		}
		if(isgo) {
			var data = await DistanceInfo.getByUserIdandDistance(userid, distance);
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
			var data = await DistanceInfo.deleteDistanceInfo({
				userid: userid,
				distance: distance
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