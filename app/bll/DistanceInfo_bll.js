const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const DistanceInfo = require("../models/DistanceInfo_model");
const xlsx = require("../../utils/excel_util");
const pathconfig = require("../../config/path_config");

//通过用户id获取distance列表
exports.getByUserId = async(userid) => {
	try {	
		var params = {
			userid: userid
		};
		var data = await DistanceInfo().query(params);
		return data;
	} catch (e) {
		throw e;
	}
};
//通过用户id和distance获取数据
exports.getByUserIdandDistance = async(userid,distance) => {
	try {	
		var params = {
			userid: userid,
			distance:distance
		};
		var data = await DistanceInfo().findOne(params);
		return data;
	} catch (e) {
		throw e;
	}
};

//新增距离数据
exports.addDistanceInfo=async(entity)=>{
	try{
		var data=await DistanceInfo().add(entity);
		return data;
	}catch(e){
		throw e;
	}
};

//删除距离数据
exports.deleteDistanceInfo=async(p)=>{
	try{
		var data=await DistanceInfo().remove(p);
		return data;
	}catch(e){
		throw e;
	}
};



