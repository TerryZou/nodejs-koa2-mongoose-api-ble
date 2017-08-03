const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const apiCode = require("../../config/api_res_code_dict");
const UserInfo = require("../bll/userinfo_bll");

//用户登录接口
exports.login = async(ctx, next) => {
	var codes = apiCode.login.codes;
	var result = new Object();
	var isgo = true;
	try {
		var username = ctx.request.body.username;
		var password = ctx.request.body.password;
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(username)) {
			result.status = codes.paramerror;
			result.status.details = "参数 username 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(password)) {
			result.status = codes.paramerror;
			result.status.details = "参数 password 不能缺少或为空！";
			isgo = false;
		}
		//验证用户名是否存在
		if(isgo) {
			var u1 = await UserInfo.getUserByName(username);
			switch(u1.status) {
				case 1:
					break;
				case 0:
					result.status = codes.notexist;
					isgo = false;
					break;
				case -1:
					result.status = codes.syserror;
					isgo = false;
					break;
			}
		}
		//验证用户吗是否有效
		if(isgo) {
			var data = await UserInfo.getUserByNamePwd(username, password);
			switch(data.status) {
				case 1:
					result.data = data.data;
					result.status = codes.success;
					break;
				case 0:
					result.status = codes.pwderror;
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

//用户注册接口
exports.register = async(ctx, next) => {
	var codes = apiCode.register.codes;
	var result = new Object();
	var isgo = true;
	try {
		var username = ctx.request.body.username;
		var password = ctx.request.body.password;
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(username)) {
			result.status = codes.paramerror;
			result.status.details = "参数 username 不能缺少或为空！";
			isgo = false;
		}
		//验证参数是否正确
		if(isgo && jsUtil.isNullOrEmpty(password)) {
			result.status = codes.paramerror;
			result.status.details = "参数 password 不能缺少或为空！";
			isgo = false;
		}
		//验证用户名是否存在
		if(isgo) {
			var u1 = await UserInfo.getUserByName(username);
			switch(u1.status) {
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
		//注册
		if(isgo) {
			var data = await UserInfo.addUser({
				username: username,
				password: password
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