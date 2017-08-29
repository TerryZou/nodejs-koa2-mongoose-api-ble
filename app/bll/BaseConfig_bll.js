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
exports.updateByUserId = async(userid, obj) => {
	try {
		var params = {
			userid: userid
		};
		var data = await BaseConfig().update(params, obj);
		return data;
	} catch(e) {
		throw e;
	}
};

//增加url
exports.add = async(entity) => {
	try {
		var data = await BaseConfig().add(entity);
		return data;
	} catch(e) {
		throw e;
	}
};

//删除url
exports.deleteUrl=async(p)=>{
	try{
		var data=await BaseConfig().remove(p);
		return data;
	}catch(e){
		throw e;
	}
};