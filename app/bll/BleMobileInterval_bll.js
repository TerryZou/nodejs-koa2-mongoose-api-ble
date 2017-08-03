const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const jsUtil = require('../../utils/js_util');
const BleMobileInterval = require("../models/BleMobileInterval_model");
const xlsx = require("../../utils/excel_util");
const pathconfig = require("../../config/path_config");

//添加一个手机
exports.add = async(entity) => {
	try {
		var data = await BleMobileInterval().add(entity);
		return data;
	} catch(e) {
		throw e;
	}
};

//通过手机型号获取数据
exports.getByMobile = async(mobile) => {
	try {
		var params = {
			mobile: mobile
		};
		var data = await BleMobileInterval().findOne(params);
		return data;
	} catch(e) {
		throw e;
	}
};

//获取扫描参数
exports.getScan = async() => {
	try {
		var params = [{
			'$match': {}
		}, {
			'$group': {
				_id: {
					"scan_interval": '$scan_interval',
					"scan_window": '$scan_window'
				}
			}
		}];
		var data = await BleMobileInterval().aggregate(params);
		return data;
	} catch(e) {
		throw e;
	}
};

//获取扫描手机型号
exports.getMobileByScan = async(scan_interval, scan_window) => {
	try {
		var params = {
			scan_interval: scan_interval,
			scan_window: scan_window
		};
		var data = await BleMobileInterval().query(params);
		return data;
	} catch(e) {
		throw e;
	}
};

//获取连接参数
exports.getConnect = async() => {
	try {
		var params = [{
			'$match': {}
		}, {
			'$group': {
				_id: {
					"connect_interval": "$connect_interval",
					"connect_window": "$connect_window",
					"connect_min_interval": "$connect_min_interval",
					"connect_max_interval": "$connect_max_interval"
				}
			}
		}];
		var data = await BleMobileInterval().aggregate(params);
		return data;
	} catch(e) {
		throw e;
	}
};

//获取链接手机型号
exports.getMobileByConnect = async(connect_interval, connect_window, connect_min_interval, connect_max_interval) => {
	try {
		var params = {
			connect_interval: connect_interval,
			connect_window: connect_window,
			connect_min_interval: connect_min_interval,
			connect_max_interval: connect_max_interval
		};
		var data = await BleMobileInterval().query(params);
		return data;
	} catch(e) {
		throw e;
	}
};