const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const xlsx = require("../../utils/excel_util");
const pathconfig = require("../../config/path_config");

//添加用户
exports.upload1=async(filename)=>{
	try{
		var datas=await xlsx.readExcel(process.cwd()+"/files/uploads/"+ filename);
		return datas;
	}catch(e){
		throw e;
	}
};
