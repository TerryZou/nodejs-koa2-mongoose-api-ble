const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const FileInfo = require("../models/FileInfo_model");
const xlsx = require("../../utils/excel_util");
const pathconfig = require("../../config/path_config");

//通过name获取
exports.getByName = async(name) => {
	try {
		var params = {
			name: name
		};
		var data = await FileInfo().findOne(params);
		return data;
	} catch(e) {
		throw e;
	}
};

//增加url
exports.add = async(entity) => {
	try {
		var data = await FileInfo().add(entity);
		return data;
	} catch(e) {
		throw e;
	}
};
