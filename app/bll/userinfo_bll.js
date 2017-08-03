const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const UserInfo = require("../models/userinfo_model");

//添加用户
exports.addUser=async(user)=>{
	try{
		var data=await UserInfo().add(user);
		return data;
	}catch(e){
		throw e;
	}
};

//通过用户名获取用户信息
exports.getUserByName = async(username) => {
	try {	
		var user = {
			username: username
		};
		var data = await UserInfo().findOne(user);
		return data;
	} catch (e) {
		throw e;
	}
};

//通过用户名和密码获取用户信息
exports.getUserByNamePwd = async(username, password) => {
	try {	
		var user = {
			username: username,
			password: password
		};
		var data = await UserInfo().findOne(user);
		if(data.succ&&data.status==1)
		{
			var user={};
			user["userid"]=data.data._id;
			user["username"]=data.data.username;
			user["password"]=data.data.password;
			data.data=user;
		}
		return data;
	} catch (e) {
		throw e;
	}
};