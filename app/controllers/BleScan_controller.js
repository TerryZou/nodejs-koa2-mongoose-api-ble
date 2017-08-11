const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const BleScan = require("../bll/BleScan_bll");

//查询扫描测试记录
exports.query = async(ctx, next) => {
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
		if(isgo && jsUtil.isNullOrEmpty(flag)) {
			result.status = codes.paramerror;
			result.status.details = "参数 flag 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(name)) {
			result.status = codes.paramerror;
			result.status.details = "参数 name 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mac)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mac 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mobile)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mobile 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mi)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mi 不能缺少或为空！";
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
exports.query_export = async(ctx, next) => {
	var codes = apiCode.ble_scan_query_export.codes;
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
		if(isgo && jsUtil.isNullOrEmpty(flag)) {
			result.status = codes.paramerror;
			result.status.details = "参数 flag 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(name)) {
			result.status = codes.paramerror;
			result.status.details = "参数 name 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mac)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mac 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mobile)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mobile 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mi)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mi 不能缺少或为空！";
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

//查询扫描测试结论
exports.result = async(ctx, next) => {
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
		if(isgo && jsUtil.isNullOrEmpty(flag)) {
			result.status = codes.paramerror;
			result.status.details = "参数 flag 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(name)) {
			result.status = codes.paramerror;
			result.status.details = "参数 name 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mac)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mac 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mobile)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mobile 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mi)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mi 不能缺少或为空！";
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
					result.status = codes.nodata;
					isgo = false;
					break;
				case 10:
					result.status = codes.nodata;
					result.status.details = "扫描次数查询无数据";
					isgo = false;
					break;
				case 20:
					result.status = codes.nodata;
					result.status.details = "最大最小平均值查询无数据";
					isgo = false;
					break;
				case 30:
					result.status.details = "链接时间方差查询无数据";
					isgo = false;
					break;
				case -1:
					result.status = codes.syserror;
					isgo = false;
					break;
				case -11:
					result.status = codes.syserror;
					result.status.details = "扫描次数查询异常";
					isgo = false;
					break;
				case -12:
					result.status = codes.syserror;
					result.status.details = "最大最小平均值查询异常";
					isgo = false;
					break;
				case -13:
					result.status = codes.syserror;
					result.status.details = "链接时间方差查询异常";
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
exports.result_export = async(ctx, next) => {
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
		if(isgo && jsUtil.isNullOrEmpty(flag)) {
			result.status = codes.paramerror;
			result.status.details = "参数 flag 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(name)) {
			result.status = codes.paramerror;
			result.status.details = "参数 name 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mac)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mac 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mobile)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mobile 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mi)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mi 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleScan.exportResult({
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
				case 2:
					result.status = codes.exporterror;
					isgo = false;
					break;
				case 0:
					result.status = codes.nodata;
					isgo = false;
					break;
				case 10:
					result.status = codes.nodata;
					result.status.details = "扫描次数查询无数据";
					isgo = false;
					break;
				case 20:
					result.status = codes.nodata;
					result.status.details = "最大最小平均值查询无数据";
					isgo = false;
					break;
				case 30:
					result.status = codes.nodata;
					result.status.details = "链接时间方差查询无数据";
					isgo = false;
					break;
				case 40:
					result.status = codes.nodata;
					result.status.details = "127信号总数查询无数据";
					isgo = false;
					break;
				case -1:
					result.status = codes.syserror;
					isgo = false;
					break;
				case -11:
					result.status = codes.syserror;
					result.status.details = "扫描次数查询异常";
					isgo = false;
					break;
				case -12:
					result.status = codes.syserror;
					result.status.details = "最大最小平均值查询异常";
					isgo = false;
					break;
				case -13:
					result.status = codes.syserror;
					result.status.details = "链接时间方差查询异常";
					isgo = false;
					break;
				case -14:
					result.status = codes.syserror;
					result.status.details = "127信号总数查询异常";
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

//查询扫描测试结论
exports.result_list = async(ctx, next) => {
	var codes = apiCode.ble_scan_result.codes;
	var params = ctx.request.body.params;
	var isgo = true;
	try {
	//验证参数是否正确
	if(isgo && jsUtil.isNullOrEmpty(params)) {
		result.status = codes.paramerror;
		result.status.details = "参数 params 不能缺少或为空！";
		isgo = false;
	}
	if(isgo) {
		params = eval("(" + params + ")");
	}
	if(isgo && params.length > 0) {
		for(var i = 0; i < params.length; i++) {
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].flag)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 flag 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].name)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 name 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].userid)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 userid 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].mac)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 mac 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].mobile)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 mobile 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].mi)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 mi 不能缺少或为空！";
				isgo = false;
				break;
			}
		}
	}

	if(isgo) {
		var data = await BleScan.getResultsBySearchs(params);
		switch(data.status) {
			case 1:
				result.data = data.data;
				result.status = codes.success;
				break;
			case 0:
				result.status = codes.nodata;
				result.status.param=data.param;
				isgo = false;
				break;
			case 10:
				result.status = codes.nodata;
				result.status.details = "扫描次数查询无数据";
				result.status.param=data.param;
				isgo = false;
				break;
			case 20:
				result.status = codes.nodata;
				result.status.details = "最大最小平均值查询无数据";
				result.status.param=data.param;
				isgo = false;
				break;
			case 30:
				result.status.details = "链接时间方差查询无数据";
				result.status.param=data.param;
				isgo = false;
				break;
			case -1:
				result.status = codes.syserror;
				result.status.param=data.param;
				isgo = false;
				break;
			case -11:
				result.status = codes.syserror;
				result.status.details = "扫描次数查询异常";
				result.status.param=data.param;
				isgo = false;
				break;
			case -12:
				result.status = codes.syserror;
				result.status.details = "最大最小平均值查询异常";
				result.status.param=data.param;
				isgo = false;
				break;
			case -13:
				result.status = codes.syserror;
				result.status.details = "链接时间方差查询异常";
				result.status.param=data.param;
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
//查询扫描测试结论导出
exports.result_list_export = async(ctx, next) => {
	var codes = apiCode.ble_scan_result_export.codes;
	var result = new Object();
	try {
		//验证参数是否正确
	if(isgo && jsUtil.isNullOrEmpty(params)) {
		result.status = codes.paramerror;
		result.status.details = "参数 params 不能缺少或为空！";
		isgo = false;
	}
	if(isgo) {
		params = eval("(" + params + ")");
	}
	if(isgo && params.length > 0) {
		for(var i = 0; i < params.length; i++) {
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].flag)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 flag 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].name)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 name 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].userid)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 userid 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].mac)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 mac 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].mobile)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 mobile 不能缺少或为空！";
				isgo = false;
				break;
			}
			//验证参数是否正确
			if(isgo && jsUtil.isNullOrEmpty(params[i].mi)) {
				result.status = codes.paramerror;
				result.status.details = "第" + i + "组参数 mi 不能缺少或为空！";
				isgo = false;
				break;
			}
		}
	}
		if(isgo) {
			var data = await BleScan.exportResults(params);

			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 2:
					result.status = codes.exporterror;
					result.status.param=data.param;
					isgo = false;
					break;
				case 0:
					result.status = codes.nodata;
					result.status.param=data.param;
					isgo = false;
					break;
				case 10:
					result.status = codes.nodata;
					result.status.details = "扫描次数查询无数据";
					result.status.param=data.param;
					isgo = false;
					break;
				case 20:
					result.status = codes.nodata;
					result.status.details = "最大最小平均值查询无数据";
					result.status.param=data.param;
					isgo = false;
					break;
				case 30:
					result.status = codes.nodata;
					result.status.details = "链接时间方差查询无数据";
					result.status.param=data.param;
					isgo = false;
					break;
				case 40:
					result.status = codes.nodata;
					result.status.details = "127信号总数查询无数据";
					result.status.param=data.param;
					isgo = false;
					break;
				case -1:
					result.status = codes.syserror;
					result.status.param=data.param;
					isgo = false;
					break;
				case -11:
					result.status = codes.syserror;
					result.status.details = "扫描次数查询异常";
					result.status.param=data.param;
					isgo = false;
					break;
				case -12:
					result.status = codes.syserror;
					result.status.details = "最大最小平均值查询异常";
					result.status.param=data.param;
					isgo = false;
					break;
				case -13:
					result.status = codes.syserror;
					result.status.details = "链接时间方差查询异常";
					result.status.param=data.param;
					isgo = false;
					break;
				case -14:
					result.status = codes.syserror;
					result.status.details = "127信号总数查询异常";
					result.status.param=data.param;
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

//查询新增扫描记录
exports.query_once = async(ctx, next) => {
	var codes = apiCode.ble_scan_queryonce.codes;
	var result = new Object();
	try {
		//var mac = ctx.request.body.mac;
		//var name = ctx.request.body.name;
		var mi = ctx.request.body.mi;
		var mobile = ctx.request.body.mobile;
		var flag = ctx.request.body.flag;
		var userid = ctx.request.body.userid;
		var isgo = true;
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(flag)) {
			result.status = codes.paramerror;
			result.status.details = "参数 flag 不能缺少或为空！";
			isgo = false;
		}

		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(userid)) {
			result.status = codes.paramerror;
			result.status.details = "参数 userid 不能缺少或为空！";
			isgo = false;
		}

		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mobile)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mobile 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(mi)) {
			result.status = codes.paramerror;
			result.status.details = "参数 mi 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleScan.getLastRecord({

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