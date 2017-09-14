const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');
const UserInfo = require("../models/userinfo_model");
const jsUtil = require('../../utils/js_util');
const pathconfig = require("../../config/path_config");
const fs = require('../../utils/file_util');
const DeviceInfo = require("../models/DeviceInfo_model");
const DistanceInfo = require("../models/DistanceInfo_model");
const BleMobileInterval = require("../models/BleMobileInterval_model");
const BleConnectTimers = require("../models/BleConnectTimers_model");
const BleConnectStatistics = require("../models/BleConnectStatistics_model");
const BleScanRecord = require("../models/BleScanRecord_model");

//添加用户
//0 无数据
//1 成功
//2 失败
//3 数据库失败
exports.ble_connect_import = async(userid, filename) => {
	var result = new Object();
	try {
		var path = process.cwd() + "/files/uploads/"+userid+"/" + filename;
		var data = await fs.readfile(path);
		if(data.succ) {
			var jsondata = eval("(" + data.data + ")");
			var firstdata = null;
			var isok = true;
			result.status = 0;
			if(jsondata.connectBeanList != undefined && jsondata.connectBeanList.length > 0) {
				firstdata = jsondata.connectBeanList[0];
				var res_data=new Object();
				res_data["flag"]=firstdata.flag;
				res_data["mi"]=firstdata.mi;
				res_data["mac"]=firstdata.mac;
				res_data["name"]=firstdata.name;
				res_data["mobile"]=firstdata.mobile;
				res_data["connect_num"]=jsondata.connect_num;
				console.log("res_data");
				console.log(res_data);
				result.data=res_data;
			} else {
				result.status = 2;
				isok = false;
			}
			//添加设备
			if(isok) {
				var dev_param = {
					"mac": firstdata.mac,
					"name": firstdata.name,
					"flag": firstdata.flag,
					"RSSI": firstdata.RSSI,
					"userid": userid,
					"type": 1
				};
				var dev_data = await DeviceInfo().findOne(dev_param);
				if(dev_data.succ) {
					if(dev_data.status == 0) {
						//数据不存在
						var obj = {
							"mac": firstdata.mac,
							"name": firstdata.name,
							"RSSI": firstdata.RSSI,
							"time": new Date(),
							"flag": firstdata.flag,
							"datetime": new Date(),
							"userid": userid,
							"type": 1
						};

						var dev_add_data = await DeviceInfo().add(obj);
						if(dev_add_data.succ) {
							if(dev_add_data.status == 1) {
								//添加成功
							} else {
								result.status = 3;
							}
						}
					} else {
						//数据存在
					}
				} else {
					result.status = 3;
				}
			}
			//添加距离
			if(isok) {
				var dist_param = {
					"distance": firstdata.mi,
					"userid": userid
				}
				var dist_data = await DistanceInfo().findOne(dist_param);
				if(dist_data.succ) {
					if(dist_data.status == 0) {
						//数据不存在
						var obj = {
							"distance": firstdata.mi,
							"userid": userid
						};
						var dist_add_data = await DistanceInfo().add(obj);
						if(dist_add_data.succ) {
							if(dist_add_data.status == 1) {
								//添加成功
							} else {
								result.status = 3;
							}
						}
					}
				} else {
					result.status = 3;
				}
			}
			//添加手机
			if(isok) {
				var mobile_param = {
					"mobile": firstdata.mobile
				}
				var mobile_data = await BleMobileInterval().findOne(mobile_param);
				if(mobile_data.succ) {
					if(mobile_data.status == 0) {
						//数据不存在
						var obj = {
							"mobile": firstdata.mobile,
							"scan_interval": "0",
							"scan_window": "0",
							"connect_interval": "0",
							"connect_window": "0",
							"connect_min_interval": "0",
							"connect_max_interval": "0"
						};
						var mobile_add_data = await BleMobileInterval().add(obj);
						if(mobile_add_data.succ) {
							if(mobile_add_data.status == 1) {
								//添加成功
							} else {
								result.status = 3;
							}
						}
					}
				} else {
					result.status = 3;
				}
			}
			//添加记录
			if(isok) {
				var c_succ = 0;
				var c_faild = 0;
				var disc_succ = 0;
				var disc_faild = 0;
				var s_succ = 0;
				var s_faild = 0;
				var dis_succ = 0;
				var dis_faild = 0;
				for(var i = 0; i < jsondata.connectBeanList.length; i++) {
					var obj = jsondata.connectBeanList[i];
					obj.userid = userid;
					var conn_data = await BleConnectTimers().add(obj);
					if(conn_data.succ) {
						if(conn_data.status == 1) {
							if(obj.ConnectionTime > 0) {
								c_succ++;
							} else {
								c_faild++;
							}

							if(obj.DisconnectTime > 0) {
								disc_succ++;
							} else {
								disc_faild++;
							}

							if(obj.LescanTime > 0) {
								s_succ++;
							} else {
								s_faild++;
							}

							if(obj.isDiscover == 1) {
								dis_succ++;
							} else {
								dis_faild++;
							}
						}
					} else {
						result.status = 3;
					}
				}
				var conn_sta_params = {
					"flag": firstdata.flag,
					"mac": firstdata.mac,
					"mi": firstdata.mi,
					"mobile": firstdata.mobile,
					"name": firstdata.name,
					"userid": userid
				};

				var sta_data = await BleConnectStatistics().findOne(conn_sta_params);
				if(sta_data.succ) {
					//修改统计
					if(sta_data.status == 1) {
						var sta_obj = {
							"lescan_success": sta_data.data.lescan_success + s_succ,
							"lecc_success": sta_data.data.lecc_success + c_succ,
							"ledc_success": sta_data.data.ledc_success + disc_succ,
							"dis_success": sta_data.data.dis_success + dis_succ,
							"lescan_failed": sta_data.data.lescan_failed + dis_faild,
							"lecc_failed": sta_data.data.lecc_failed + c_faild,
							"ledc_failed": sta_data.data.ledc_failed + disc_faild,
							"dis_failed": sta_data.data.dis_failed + dis_faild
						}

						var sta_result = await BleConnectStatistics().update(conn_sta_params, sta_obj);
					} else {
						//添加
						var sta_obj = {
							"flag": firstdata.flag,
							"mac": firstdata.mac,
							"mi": firstdata.mi,
							"mobile": firstdata.mobile,
							"name": firstdata.name,
							"userid": userid,
							"lescan_success": s_succ,
							"lecc_success": c_succ,
							"ledc_success": disc_succ,
							"dis_success": dis_succ,
							"lescan_failed": dis_faild,
							"lecc_failed": c_faild,
							"ledc_failed": disc_faild,
							"dis_failed": dis_faild,
							"devicedown_success": 0,
							"devicedown_failed": 0,
							"deviceup_success": 0,
							"deviceup_failed": 0
						}

						var sta_result = await BleConnectStatistics().add(sta_obj);
						if(sta_result.succ) {
							if(sta_result.status == 1) {

							} else {
								result.status = 3;
							}
						}
					}
				} else {
					result.status = 3;
				}
			}
		}
		result.succ = true;
	} catch(e) {
		result.succ = false;
		result.status = -1;
	}
	return result;
};

//添加用户
//0 无数据
//1 成功
//2 失败
//3 数据库失败
exports.ble_scan_import = async(userid, filename) => {
	var result = new Object();
	var isok = true;
	result.status = 0;
	try {
		var path = process.cwd() + "/files/uploads/"+userid+"/" + filename;
		var data = await fs.readfile(path);
		if(data.succ) {
			var jsondata = eval("(" + data.data + ")");
			var firstdata = null;
			
			if(jsondata.scanBeanList != undefined && jsondata.scanBeanList.length > 0) {
				firstdata = jsondata.scanBeanList[0];
				var res_data=new Object();
				res_data["flag"]=firstdata.flag;
				res_data["mi"]=firstdata.mi;
				res_data["mac"]=firstdata.mac;
				res_data["name"]=firstdata.name;
				res_data["mobile"]=firstdata.mobile;
				result.data=res_data;
			} else {
				result.status = 2;
				console.log("无数据");
				isok = false;
			}
			//添加设备
			if(isok) {
				var dev_param = {
					"mac": firstdata.mac,
					"name": firstdata.name,
					"flag": firstdata.flag,
					"RSSI": firstdata.RSSI,
					"userid": userid,
					"type": 1
				};
				var dev_data = await DeviceInfo().findOne(dev_param);
				if(dev_data.succ) {
					if(dev_data.status == 0) {
						//数据不存在
						var obj = {
							"mac": firstdata.mac,
							"name": firstdata.name,
							"RSSI": firstdata.RSSI,
							"time": new Date().getTime().toString(),
							"flag": firstdata.flag,
							"datetime": new Date(),
							"userid": userid,
							"type": 1
						};

						var dev_add_data = await DeviceInfo().add(obj);
						if(dev_add_data.succ) {
							if(dev_add_data.status == 1) {
								//添加成功
							} else {
								result.status = 3;
								console.log("设备添加失败");
							}
						}
					} else {
						//数据存在
					}
				} else {
					result.status = 3;
					console.log("设备查询失败");
				}
			}
			//添加距离
			if(isok) {
				var dist_param = {
					"distance": firstdata.mi,
					"userid": userid
				}
				var dist_data = await DistanceInfo().findOne(dist_param);
				if(dist_data.succ) {
					if(dist_data.status == 0) {
						//数据不存在
						var obj = {
							"distance": firstdata.mi,
							"userid": userid
						};
						var dist_add_data = await DistanceInfo().add(obj);
						if(dist_add_data.succ) {
							if(dist_add_data.status == 1) {
								//添加成功
							} else {
								result.status = 3;
								console.log("距离添加失败");
							}
						}
					}
				} else {
					result.status = 3;
					console.log("距离查询失败");
				}
			}
			//添加手机
			if(isok) {
				var mobile_param = {
					"mobile": firstdata.mobile
				}
				var mobile_data = await BleMobileInterval().findOne(mobile_param);
				if(mobile_data.succ) {
					if(mobile_data.status == 0) {
						//数据不存在
						var obj = {
							"mobile": firstdata.mobile,
							"scan_interval": "0",
							"scan_window": "0",
							"connect_interval": "0",
							"connect_window": "0",
							"connect_min_interval": "0",
							"connect_max_interval": "0"
						};
						var mobile_add_data = await BleMobileInterval().add(obj);
						if(mobile_add_data.succ) {
							if(mobile_add_data.status == 1) {
								//添加成功
							} else {
								result.status = 3;
								console.log("手机添加失败");
							}
						}
					}
				} else {
					result.status = 3;
					console.log("手机查询失败");
				}
			}
			//添加记录
			if(isok) {
				for(var i = 0; i < jsondata.scanBeanList.length; i++) {
					var obj = jsondata.scanBeanList[i];
					obj.userid = userid;
					var scan_data = await BleScanRecord().add(obj);
					if(scan_data.succ) {
						if(scan_data.status == 1) {
						}
					} else {
						result.status = 3;
						console.log("记录添加失败");
					}
				}
			}
		}
		result.succ = true;
	} catch(e) {
		result.succ = false;
		result.status = -1;
	}
	return result;
};
