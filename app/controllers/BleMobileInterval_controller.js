const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const BleMobileInterval = require("../bll/BleMobileInterval_bll");

//新增手机型号
exports.ble_add_mobile = async(ctx, next) => {
	var codes = apiCode.ble_add_mobile.codes;
	var result = new Object();
	var isgo = true;
	try {
		var mobile = ctx.request.body.mobile;
		var scan_interval = ctx.request.body.scan_interval;
		var scan_window = ctx.request.body.scan_window;
		var connect_interval = ctx.request.body.connect_interval;
		var connect_window = ctx.request.body.connect_window;
		var connect_min_interval = ctx.request.body.connect_min_interval;
		var connect_max_interval = ctx.request.body.connect_max_interval;
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(mobile) ) {
			result.status = codes.paramerror;
			result.status.details="参数 mobile 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(scan_interval) ) {
			result.status = codes.paramerror;
			result.status.details="参数 scan_interval 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(scan_window) ) {
			result.status = codes.paramerror;
			result.status.details="参数 scan_window 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(connect_interval) ) {
			result.status = codes.paramerror;
			result.status.details="参数 connect_interval 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(connect_window) ) {
			result.status = codes.paramerror;
			result.status.details="参数 connect_window 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(connect_min_interval) ) {
			result.status = codes.paramerror;
			result.status.details="参数 connect_min_interval 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(connect_max_interval) ) {
			result.status = codes.paramerror;
			result.status.details="参数 connect_max_interval 不能缺少或为空！";
			isgo = false;
		}
		//验证是否存在
		if(isgo) {
			var data = await BleMobileInterval.getByMobile(mobile);
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
			var data = await BleMobileInterval.add({
				mobile: mobile,
				scan_interval: scan_interval,
				scan_window: scan_window,
				connect_interval: connect_interval,
				connect_window: connect_window,
				connect_min_interval: connect_min_interval,
				connect_max_interval: connect_max_interval
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
		console.log(e);
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};

//获取扫描参数
exports.ble_get_scan = async(ctx, next) => {
	var codes = apiCode.ble_get_scan.codes;
	var result = new Object();
	var isgo = true;
	try {
		if(isgo) {
			var data = await BleMobileInterval.getScan();
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

//获取扫描手机型号
exports.ble_get_scan_mobile = async(ctx, next) => {
	var codes = apiCode.ble_get_scan_mobile.codes;
	var result = new Object();
	var isgo = true;
	try {
		var scan_interval = ctx.request.body.scan_interval;
		var scan_window = ctx.request.body.scan_window;
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(scan_interval) ) {
			result.status = codes.paramerror;
			result.status.details="参数 scan_interval 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(scan_window) ) {
			result.status = codes.paramerror;
			result.status.details="参数 scan_window 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleMobileInterval.getMobileByScan(scan_interval, scan_window);
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

//获取连接参数
exports.ble_get_connect = async(ctx, next) => {
	var codes = apiCode.ble_get_connect.codes;
	var result = new Object();
	var isgo = true;
	try {
		if(isgo) {
			var data = await BleMobileInterval.getConnect();
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

//获取扫描手机型号
exports.ble_get_connect_mobile = async(ctx, next) => {
	var codes = apiCode.ble_get_connect_mobile.codes;
	var result = new Object();
	var isgo = true;
	try {
		var connect_interval = ctx.request.body.connect_interval;
		var connect_window = ctx.request.body.connect_window;
		var connect_min_interval = ctx.request.body.connect_min_interval;
		var connect_max_interval = ctx.request.body.connect_max_interval;
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(connect_interval) ) {
			result.status = codes.paramerror;
			result.status.details="参数 connect_interval 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(connect_window) ) {
			result.status = codes.paramerror;
			result.status.details="参数 connect_window 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(connect_min_interval) ) {
			result.status = codes.paramerror;
			result.status.details="参数 connect_min_interval 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo &&jsUtil.isNullOrEmpty(connect_max_interval) ) {
			result.status = codes.paramerror;
			result.status.details="参数 connect_max_interval 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleMobileInterval.getMobileByConnect(
				connect_interval,
				connect_window,
				connect_min_interval,
				connect_max_interval
			);
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