const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const BleConnect = require("../bll/BleConnect_bll");

//查询连接测试记录
exports.query = async(ctx, next) => {
	var codes = apiCode.ble_connect_query.codes;
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
			var data = await BleConnect.getRecordsBySearch({
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

//查询连接测试记录
exports.query_list = async(ctx, next) => {
	var codes = apiCode.ble_connect_query.codes;
	var params = ctx.request.body.params;
	var result = new Object();
	try {
		var isgo = true;
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
				//验证参数是否正确
				if(isgo && jsUtil.isNullOrEmpty(params[i].connect_num)) {
					result.status = codes.paramerror;
					result.status.details = "第" + i + "组参数 connect_num 不能缺少或为空！";
					isgo = false;
					break;
				}
			}
		}

		if(isgo) {
			var data = await BleConnect.getRecordsListBySearch(params);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
					result.param = data.param;
					break;
				case -1:
					result.status = codes.syserror;
					result.param = data.param;
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
	var codes = apiCode.ble_connect_query_export.codes;
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
			var data = await BleConnect.exportRecords({
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
//查询连接测试结论导出
exports.query_list_export = async(ctx, next) => {
	var codes = apiCode.ble_connect_query_export.codes;
	var params = ctx.request.body.params;
	var result = new Object();
	try {
		var isgo = true;
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
				//验证参数是否正确
				if(isgo && jsUtil.isNullOrEmpty(params[i].connect_num)) {
					result.status = codes.paramerror;
					result.status.details = "第" + i + "组参数 connect_num 不能缺少或为空！";
					isgo = false;
					break;
				}
			}
		}

		if(isgo) {
			var data = await BleConnect.exportRecordsList(params);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 2:
					result.status = codes.exporterror;
					result.param = data.param;
					break;
				case 0:
					result.status = codes.nodata;
					result.param = data.param;
					break;
				case -1:
					result.status = codes.syserror;
					result.param = data.param;
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
exports.result = async(ctx, next) => {
	var codes = apiCode.ble_connect_result.codes;
	var result = new Object();
	try {
		var mac = ctx.request.body.mac;
		var name = ctx.request.body.name;
		var mi = ctx.request.body.mi;
		var mobile = ctx.request.body.mobile;
		var flag = ctx.request.body.flag;
		var userid = ctx.request.body.userid;
		var connect_num = ctx.request.body.connect_num;
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
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(connect_num)) {
			result.status = codes.paramerror;
			result.status.details = "参数 connect_num 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleConnect.getResultBySearch({
				mac: mac,
				name: name,
				mi: mi,
				mobile: mobile,
				flag: flag,
				userid: userid,
				connect_num: connect_num
			});
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.nodata;
					result.status.details = "";
					break;
				case 10:
					result.status = codes.nodata;
					result.status.details = "基本查询无数据";
					break;
				case 20:
					result.status = codes.nodata;
					result.status.details = "链接扫描最大最小平均值查询无数据";
					break;
				case 30:
					result.status = codes.nodata;
					result.status.details = "连接时间方差查询无数据";
					break;
				case 40:
					result.status = codes.nodata;
					result.status.details = "扫描时间方差查询无数据";
					break;
				case 50:
					result.status = codes.nodata;
					result.status.details = "信号时间方差查询无数据";
					break;
				case 60:
					result.status = codes.nodata;
					result.status.details = "信号最大最小平均值查询无数据";
					break;
				case 70:
					result.status = codes.nodata;
					result.status.details = "127信号总数查询无数据";
					break;
				case -1:
					result.status = codes.syserror;
					result.status.details = "";
					break;
				case -11:
					result.status = codes.syserror;
					result.status.details = "基本查询异常";
					break;
				case -12:
					result.status = codes.syserror;
					result.status.details = "链接扫描最大最小平均值查询异常";
					break;
				case -13:
					result.status = codes.syserror;
					result.status.details = "连接时间方差查询异常";
					break;
				case -14:
					result.status = codes.syserror;
					result.status.details = "扫描时间方差查询异常";
					break;
				case -15:
					result.status = codes.syserror;
					result.status.details = "信号时间方差查询异常";
					break;
				case -16:
					result.status = codes.syserror;
					result.status.details = "信号最大最小平均值查询异常";
				case -17:
					result.status = codes.syserror;
					result.status.details = "127信号总数查询异常";
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
	var codes = apiCode.ble_connect_result_export.codes;
	var result = new Object();
	try {
		var mac = ctx.request.body.mac;
		var name = ctx.request.body.name;
		var mi = ctx.request.body.mi;
		var mobile = ctx.request.body.mobile;
		var flag = ctx.request.body.flag;
		var userid = ctx.request.body.userid;
		var connect_num = ctx.request.body.connect_num;
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
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(connect_num)) {
			result.status = codes.paramerror;
			result.status.details = "参数 connect_num 不能缺少或为空！";
			isgo = false;
		}
		if(isgo) {
			var data = await BleConnect.exportResult({
				mac: mac,
				name: name,
				mi: mi,
				mobile: mobile,
				flag: flag,
				userid: userid,
				connect_num: connect_num
			});
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 2:
					result.status = codes.exporterror;
					break;
				case 0:
				case 10:
					result.status = codes.nodata;
					result.status.details = "基本查询无数据";
					break;
				case 20:
					result.status = codes.nodata;
					result.status.details = "最大最小平均值查询无数据";
					break;
				case 30:
					result.status = codes.nodata;
					result.status.details = "连接时间方差查询无数据";
					break;
				case 40:
					result.status = codes.nodata;
					result.status.details = "扫描时间方差查询无数据";
					break;
				case 50:
					result.status = codes.nodata;
					result.status.details = "信号时间方差查询无数据";
					break;
				case -1:
				case -11:
					result.status = codes.syserror;
					result.status.details = "基本查询异常";
					break;
				case -12:
					result.status = codes.syserror;
					result.status.details = "最大最小平均值查询异常";
					break;
				case -13:
					result.status = codes.syserror;
					result.status.details = "连接时间方差查询异常";
					break;
				case -14:
					result.status = codes.syserror;
					result.status.details = "扫描时间方差查询异常";
					break;
				case -15:
					result.status = codes.syserror;
					result.status.details = "信号时间方差查询异常";
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
exports.result_list = async(ctx, next) => {
	var codes = apiCode.ble_connect_result_export.codes;
	var params = ctx.request.body.params;
	var result = new Object();
	try {
		var isgo = true;
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
				//验证参数是否正确
				if(isgo && jsUtil.isNullOrEmpty(params[i].connect_num)) {
					result.status = codes.paramerror;
					result.status.details = "第" + i + "组参数 connect_num 不能缺少或为空！";
					isgo = false;
					break;
				}
			}
		}

		if(isgo) {
			var data = await BleConnect.getResultBySearch(params);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 2:
					result.status = codes.exporterror;
					result.status.param = data.param;
					break;
				case 0:
				case 10:
					result.status = codes.nodata;
					result.status.details = "基本查询无数据";
					result.status.param = data.param;
					break;
				case 20:
					result.status = codes.nodata;
					result.status.details = "最大最小平均值查询无数据";
					result.status.param = data.param;
					break;
				case 30:
					result.status = codes.nodata;
					result.status.details = "连接时间方差查询无数据";
					result.status.param = data.param;
					break;
				case 40:
					result.status = codes.nodata;
					result.status.details = "扫描时间方差查询无数据";
					result.status.param = data.param;
					break;
				case 50:
					result.status = codes.nodata;
					result.status.details = "信号时间方差查询无数据";
					result.status.param = data.param;
					break;
				case -1:
				case -11:
					result.status = codes.syserror;
					result.status.details = "基本查询异常";
					result.status.param = data.param;
					break;
				case -12:
					result.status = codes.syserror;
					result.status.details = "最大最小平均值查询异常";
					result.status.param = data.param;
					break;
				case -13:
					result.status = codes.syserror;
					result.status.details = "连接时间方差查询异常";
					result.status.param = data.param;
					break;
				case -14:
					result.status = codes.syserror;
					result.status.details = "扫描时间方差查询异常";
					result.status.param = data.param;
					break;
				case -15:
					result.status = codes.syserror;
					result.status.details = "信号时间方差查询异常";
					result.status.param = data.param;
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
exports.result_list_export = async(ctx, next) => {
	var codes = apiCode.ble_connect_result_export.codes;
	var params = ctx.request.body.params;
	var result = new Object();
	try {
		var isgo = true;
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
				//验证参数是否正确
				if(isgo && jsUtil.isNullOrEmpty(params[i].connect_num)) {
					result.status = codes.paramerror;
					result.status.details = "第" + i + "组参数 connect_num 不能缺少或为空！";
					isgo = false;
					break;
				}
			}
		}

		if(isgo) {
			var data = await BleConnect.exportResults(params);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 2:
					result.status = codes.exporterror;
					result.status.param = data.param;
					break;
				case 0:
				case 10:
					result.status = codes.nodata;
					result.status.details = "基本查询无数据";
					result.status.param = data.param;
					break;
				case 20:
					result.status = codes.nodata;
					result.status.details = "最大最小平均值查询无数据";
					result.status.param = data.param;
					break;
				case 30:
					result.status = codes.nodata;
					result.status.details = "连接时间方差查询无数据";
					result.status.param = data.param;
					break;
				case 40:
					result.status = codes.nodata;
					result.status.details = "扫描时间方差查询无数据";
					result.status.param = data.param;
					break;
				case 50:
					result.status = codes.nodata;
					result.status.details = "信号时间方差查询无数据";
					result.status.param = data.param;
					break;
				case -1:
				case -11:
					result.status = codes.syserror;
					result.status.details = "基本查询异常";
					result.status.param = data.param;
					break;
				case -12:
					result.status = codes.syserror;
					result.status.details = "最大最小平均值查询异常";
					result.status.param = data.param;
					break;
				case -13:
					result.status = codes.syserror;
					result.status.details = "连接时间方差查询异常";
					result.status.param = data.param;
					break;
				case -14:
					result.status = codes.syserror;
					result.status.details = "扫描时间方差查询异常";
					result.status.param = data.param;
					break;
				case -15:
					result.status = codes.syserror;
					result.status.details = "信号时间方差查询异常";
					result.status.param = data.param;
					break;
			}
		}
	} catch(e) {
		result.status = codes.syserror;
	}
	result.isf = false;
	ctx.body = result;
};