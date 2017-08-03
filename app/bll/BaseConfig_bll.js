const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const BaseConfig = require("../models/BaseConfig_model");
const xlsx = require("../../utils/excel_util");
const pathconfig = require("../../config/path_config");

//通过用户id获取url
exports.getByUserId = async(userid) => {
	try {
		var params = {
			userid: userid
		};
		var data = await BaseConfig().findOne(params);
		return data;
	} catch(e) {
		throw e;
	}
};

//修改url
exports.updateByUserId = async(userid, data) => {
	try {
		var params = {
			userid: userid
		};
		var data = await BaseConfig().update(params, data);
		return data;
	} catch(e) {
		throw e;
	}
};