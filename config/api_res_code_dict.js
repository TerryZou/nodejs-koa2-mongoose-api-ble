const dict = {
	//登录api
	login: {
		code: 10101,
		apiname: "login",
		apiurl: "api/users/login",
		codes: {
			//登录成功
			success: {
				code: 1010100,
				msg: "登录成功",
				sub_code: "login_success",
				sub_msg: "登录成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			pwderror: {
				code: 1010101,
				msg: "密码错误",
				sub_code: "login_faild_pwderror",
				sub_msg: "登录失败，密码错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			notexist: {
				code: 1010102,
				msg: "账户不存在",
				sub_code: "login_faild_notexist",
				sub_msg: "登录失败，用户名错误或者不存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 1010103,
				msg: "参数有误",
				sub_code: "login_faild_paramerror",
				sub_msg: "登录失败，登录信息参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "login_faild_syserror",
				sub_msg: "登录失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//注册
	register: {
		code: 10201,
		apiname: "register",
		apiurl: "api/users/register",
		codes: {
			//注册成功
			success: {
				code: 1020100,
				msg: "注册成功",
				sub_code: "register_success",
				sub_msg: "注册成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			exist: {
				code: 1020101,
				msg: "用户名已存在",
				sub_code: "register_faild_exist",
				sub_msg: "注册失败，用户名已存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 1020102,
				msg: "参数有误",
				sub_code: "register_faild_paramerror",
				sub_msg: "注册失败，注册信息参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "register_faild_syserror",
				sub_msg: "注册失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//查询连接测试记录
	ble_connect_query: {
		code: 30201,
		apiname: "ble_connect_query",
		apiurl: "api/ble_content/query",
		codes: {
			success: {
				code: 3020100,
				msg: "查询成功",
				sub_code: "ble_connect_query_success",
				sub_msg: "查询连接测试记录成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 3020101,
				msg: "参数有误",
				sub_code: "ble_connect_query_faild_paramerror",
				sub_msg: "查询连接测试记录失败，查询参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 3020102,
				msg: "没有数据",
				sub_code: "ble_connect_query_faild_nodata",
				sub_msg: "查询连接测试记录失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_connect_query_faild_syserror",
				sub_msg: "查询连接测试记录失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//导出连接测试记录
	ble_connect_query_export: {
		code: 30202,
		apiname: "ble_connect_query_export",
		apiurl: "api/ble_content/query_export",
		codes: {
			success: {
				code: 3020200,
				msg: "导出成功",
				sub_code: "ble_connect_query_export_success",
				sub_msg: "导出连接测试记录成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 3020201,
				msg: "参数有误",
				sub_code: "ble_connect_query_export_faild_paramerror",
				sub_msg: "导出连接测试记录失败，参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 3020202,
				msg: "无数据",
				sub_code: "ble_connect_query_export_faild_nodata",
				sub_msg: "导出连接测试记录失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			exporterror: {
				code: 3020203,
				msg: "导出失败",
				sub_code: "ble_connect_query_export_faild_exporterror",
				sub_msg: "导出连接测试记录失败，文件生成失败",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_connect_query_export_faild_syserror",
				sub_msg: "导出连接测试记录失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//查询连接测试结论
	ble_connect_result: {
		code: 30301,
		apiname: "ble_connect_result",
		apiurl: "api/ble_content/result",
		codes: {
			success: {
				code: 3030100,
				msg: "查询成功",
				sub_code: "ble_connect_result_success",
				sub_msg: "查询连接测试结论成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 3030101,
				msg: "参数有误",
				sub_code: "ble_connect_result_faild_paramerror",
				sub_msg: "查询连接测试结论失败，查询参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 3030102,
				msg: "无数据",
				sub_code: "ble_connect_result_faild_nodata",
				sub_msg: "查询连接测试结论失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_connect_result_faild_syserror",
				sub_msg: "查询连接测试结论失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//导出连接测试结论
	ble_connect_result_export: {
		code: 303020,
		apiname: "ble_connect_result_export",
		apiurl: "api/ble_content/result_export",
		codes: {
			success: {
				code: 3030200,
				msg: "导出成功",
				sub_code: "ble_connect_result_export_success",
				sub_msg: "导出连接测试结论成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 3030201,
				msg: "导出失败",
				sub_code: "ble_connect_result_exportt_faild_paramerror",
				sub_msg: "导出连接测试结论失败，导出参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 3030202,
				msg: "无数据",
				sub_code: "ble_connect_result_export_faild_nodata",
				sub_msg: "导出连接测试结论失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			exporterror: {
				code: 3030203,
				msg: "导出失败",
				sub_code: "ble_connect_result_export_faild_exporterror",
				sub_msg: "导出连接测试结论失败，文件生成失败",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_connect_result_export_faild_syserror",
				sub_msg: "导出连接测试结论失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//查询连接测试记录
	bt_connect_query: {
		code: 30501,
		apiname: "bt_connect_query",
		apiurl: "api/bt_content/query",
		codes: {
			success: {
				code: 3050100,
				msg: "查询成功",
				sub_code: "bt_connect_query_success",
				sub_msg: "查询连接测试记录成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 3050101,
				msg: "参数有误",
				sub_code: "bt_connect_query_faild_paramerror",
				sub_msg: "查询连接测试记录失败，查询参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 3050102,
				msg: "没有数据",
				sub_code: "bt_connect_query_faild_nodata",
				sub_msg: "查询连接测试记录失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "bt_connect_query_faild_syserror",
				sub_msg: "查询连接测试记录失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//导出连接测试记录
	bt_connect_query_export: {
		code: 30502,
		apiname: "bt_connect_query_export",
		apiurl: "api/bt_content/query_export",
		codes: {
			success: {
				code: 3050200,
				msg: "导出成功",
				sub_code: "bt_connect_query_export_success",
				sub_msg: "导出连接测试记录成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 3050201,
				msg: "参数有误",
				sub_code: "bt_connect_query_export_faild_paramerror",
				sub_msg: "导出连接测试记录失败，参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 3060202,
				msg: "无数据",
				sub_code: "bt_connect_query_export_faild_nodata",
				sub_msg: "导出连接测试记录失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			exporterror: {
				code: 3050203,
				msg: "导出失败",
				sub_code: "bt_connect_query_export_faild_exporterror",
				sub_msg: "导出连接测试记录失败，文件生成失败",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "bt_connect_query_export_faild_syserror",
				sub_msg: "导出连接测试记录失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//查询连接测试结论
	bt_connect_result: {
		code: 30601,
		apiname: "bt_connect_result",
		apiurl: "api/bt_content/result",
		codes: {
			success: {
				code: 3060100,
				msg: "查询成功",
				sub_code: "bt_connect_result_success",
				sub_msg: "查询连接测试结论成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 3060101,
				msg: "参数有误",
				sub_code: "bt_connect_result_faild_paramerror",
				sub_msg: "查询连接测试结论失败，查询参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 3060102,
				msg: "无数据",
				sub_code: "bt_connect_result_faild_nodata",
				sub_msg: "查询连接测试结论失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "bt_connect_result_faild_syserror",
				sub_msg: "查询连接测试结论失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//导出连接测试结论
	bt_connect_result_export: {
		code: 306020,
		apiname: "bt_connect_result_export",
		apiurl: "api/bt_content/result_export",
		codes: {
			success: {
				code: 3060200,
				msg: "导出成功",
				sub_code: "bt_connect_result_export_success",
				sub_msg: "导出连接测试结论成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 3060201,
				msg: "导出失败",
				sub_code: "bt_connect_result_exportt_faild_paramerror",
				sub_msg: "导出连接测试结论失败，导出参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 3060202,
				msg: "无数据",
				sub_code: "bt_connect_result_export_faild_nodata",
				sub_msg: "导出连接测试结论失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			exporterror: {
				code: 3060203,
				msg: "导出失败",
				sub_code: "bt_connect_result_export_faild_exporterror",
				sub_msg: "导出连接测试结论失败，文件生成失败",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "bt_connect_result_export_faild_syserror",
				sub_msg: "导出连接测试结论失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},

	//查询扫描测试记录
	ble_scan_query: {
		code: 40201,
		apiname: "ble_scan_query",
		apiurl: "api/ble_scan/query",
		codes: {
			success: {
				code: 4020100,
				msg: "查询成功",
				sub_code: "ble_scan_query_success",
				sub_msg: "查询扫描测试记录成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 4020101,
				msg: "查询失败",
				sub_code: "ble_scan_query_faild_paramerror",
				sub_msg: "查询扫描测试记录失败，查询参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 4020102,
				msg: "无数据",
				sub_code: "ble_scan_query_faild_nodata",
				sub_msg: "查询扫描测试记录失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_scan_query_faild_syserror",
				sub_msg: "查询扫描测试记录失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//导出扫描测试记录
	ble_scan_query_export: {
		code: 40202,
		apiname: "ble_scan_query_export",
		apiurl: "api/ble_scan/query_export",
		codes: {
			success: {
				code: 4020200,
				msg: "导出成功",
				sub_code: "ble_scan_query_export_success",
				sub_msg: "导出扫描测试记录成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 4020201,
				msg: "导出失败",
				sub_code: "ble_scan_query_export_faild_paramerror",
				sub_msg: "导出扫描测试记录失败，导出参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 4020202,
				msg: "无数据",
				sub_code: "ble_scan_query_export_faild_nodata",
				sub_msg: "导出扫描测试记录失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			exporterror: {
				code: 4020203,
				msg: "导出失败",
				sub_code: "ble_scan_query_export_faild_exporterror",
				sub_msg: "导出扫描测试记录失败，文件生成失败",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_scan_query_export_faild_syserror",
				sub_msg: "导出扫描测试记录失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//查询扫描测试结论
	ble_scan_result: {
		code: 40301,
		apiname: "ble_scan_result",
		apiurl: "api/ble_scan/result",
		codes: {
			success: {
				code: 4030100,
				msg: "查询成功",
				sub_code: "ble_scan_result_success",
				sub_msg: "查询扫描测试结论成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 4030101,
				msg: "查询失败",
				sub_code: "ble_scan_result_faild_paramerror",
				sub_msg: "查询扫描测试结论失败，查询参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 4030102,
				msg: "无数据",
				sub_code: "ble_scan_result_faild_nodata",
				sub_msg: "查询扫描测试结论失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_scan_result_faild_syserror",
				sub_msg: "查询扫描测试结论失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//导出扫描测试结果
	ble_scan_result_export: {
		code: 40302,
		apiname: "ble_scan_result_export",
		apiurl: "api/ble_scan/result_export",
		codes: {
			success: {
				code: 4030200,
				msg: "导出成功",
				sub_code: "ble_scan_result_export_success",
				sub_msg: "查询扫描测试结果成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 4030201,
				msg: "导出失败",
				sub_code: "ble_scan_result_export_faild_paramerror",
				sub_msg: "导出扫描测试结果失败，查询参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 4030202,
				msg: "无数据",
				sub_code: "ble_scan_result_export_faild_nodata",
				sub_msg: "导出扫描测试结果失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			exporterror: {
				code: 4030203,
				msg: "导出失败",
				sub_code: "ble_scan_result_export_faild_exporterror",
				sub_msg: "导出扫描测试结果失败，文件生成失败",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_scan_result_export_faild_syserror",
				sub_msg: "导出扫描测试结果失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//查询新增扫描记录
	ble_scan_queryonce: {
		code: 40301,
		apiname: "ble_scan_queryonce",
		apiurl: "api/ble_scan/queryonce",
		codes: {
			success: {
				code: 4040100,
				msg: "查询成功",
				sub_code: "ble_scan_query_success",
				sub_msg: "查询新增扫描记录成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 4040101,
				msg: "查询失败",
				sub_code: "ble_scan_query_faild_paramerror",
				sub_msg: "查询新增扫描记录失败，查询参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 4040102,
				msg: "无数据",
				sub_code: "ble_scan_query_faild_nodata",
				sub_msg: "查询新增扫描记录失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_scan_query_faild_syserror",
				sub_msg: "查询新增扫描记录失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//获取url
	baseconfig_get_url: {
		code: 50101,
		apiname: "baseconfig_get_url",
		apiurl: "api/config/get_url",
		codes: {
			//登录成功
			success: {
				code: 5010100,
				msg: "获取成功",
				sub_code: "baseconfig_get_url_success",
				sub_msg: "获取url成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5010101,
				msg: "参数有误",
				sub_code: "baseconfig_get_url_faild_paramerror",
				sub_msg: "获取url失败，参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5010102,
				msg: "无数据",
				sub_code: "baseconfig_get_url_faild_nodata",
				sub_msg: "获取url失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "baseconfig_get_url_faild_syserror",
				sub_msg: "获取url失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//修改url
	baseconfig_set_url: {
		code: 50102,
		apiname: "baseconfig_set_url",
		apiurl: "api/config/set_url",
		codes: {
			//修改成功
			success: {
				code: 5010200,
				msg: "修改成功",
				sub_code: "baseconfig_set_url_success",
				sub_msg: "修改url成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5010201,
				msg: "修改失败",
				sub_code: "baseconfig_set_url_faild_paramerror",
				sub_msg: "修改url失败，修改参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},

			nochange: {
				code: 5010202,
				msg: "修改失败",
				sub_code: "baseconfig_set_url_faild_nochange",
				sub_msg: "修改url失败，没有数据被修改",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "baseconfig_set_url_faild_syserror",
				sub_msg: "修改url失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//添加url
	baseconfig_add_url: {
		code: 50103,
		apiname: "baseconfig_add_url",
		apiurl: "api/config/add_url",
		codes: {
			//修改成功
			success: {
				code: 5010300,
				msg: "添加成功",
				sub_code: "baseconfig_add_url_success",
				sub_msg: "添加url成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5010301,
				msg: "添加失败",
				sub_code: "baseconfig_add_url_faild_paramerror",
				sub_msg: "添加url失败，添加参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},

			exist: {
				code: 5010302,
				msg: "添加失败",
				sub_code: "baseconfig_add_url_faild_exist",
				sub_msg: "添加url失败，数据已存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "baseconfig_add_url_faild_syserror",
				sub_msg: "添加url失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//删除url
	baseconfig_del_url: {
		code: 50104,
		apiname: "baseconfig_del_url",
		apiurl: "api/config/del_url",
		codes: {
			//修改成功
			success: {
				code: 5010400,
				msg: "删除成功",
				sub_code: "baseconfig_del_url_success",
				sub_msg: "删除url成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			noexist: {
				code: 5010401,
				msg: "删除失败",
				sub_code: "baseconfig_del_url_faild_noexist",
				sub_msg: "删除url失败，数据不存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5010402,
				msg: "删除失败",
				sub_code: "baseconfig_del_url_faild_paramerror",
				sub_msg: "删除url失败，添加参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "baseconfig_del_url_faild_syserror",
				sub_msg: "删除url失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//获取距离数据
	ble_get_distance: {
		code: 50301,
		apiname: "ble_get_distance",
		apiurl: "api/config/ble_get_distance",
		codes: {
			success: {
				code: 5030100,
				msg: "获取成功",
				sub_code: "get_distance_success",
				sub_msg: "获取距离数据成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5030101,
				msg: "参数有误",
				sub_code: "get_distance_faild_paramerror",
				sub_msg: "获取距离数据失败，查询参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5030102,
				msg: "无数据",
				sub_code: "get_distance_faild_nodata",
				sub_msg: "获取距离数据失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "get_distance_faild_syserror",
				sub_msg: "获取距离数据失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//新增距离数据
	ble_set_distance: {
		code: 50302,
		apiname: "ble_set_distance",
		apiurl: "api/config/ble_set_distance",
		codes: {
			success: {
				code: 5030200,
				msg: "新增成功",
				sub_code: "distance_set_success",
				sub_msg: "新增距离数据成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			exist: {
				code: 5030201,
				msg: "数据已存在",
				sub_code: "distance_set_faild_exist",
				sub_msg: "新增距离数据失败，数据已存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5030202,
				msg: "参数有误",
				sub_code: "distance_set_faild_paramerror",
				sub_msg: "新增距离数据失败，参数有误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "distance_set_faild_syserror",
				sub_msg: "新增距离数据失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//删除距离数据
	ble_del_distance: {
		code: 50303,
		apiname: "ble_del_distance",
		apiurl: "api/config/ble_del_distance",
		codes: {
			success: {
				code: 5030300,
				msg: "删除成功",
				sub_code: "distance_del_success",
				sub_msg: "删除距离数据成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			noexist: {
				code: 5030301,
				msg: "数据不存在",
				sub_code: "distance_del_faild_exist",
				sub_msg: "删除距离数据失败，该数据不存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5030302,
				msg: "参数有误",
				sub_code: "distance_del_faild_paramerror",
				sub_msg: "删除距离数据失败，参数不正确",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "distance_del_faild_syserror",
				sub_msg: "删除距离数据失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//添加手机
	ble_add_mobile: {
		code: 50401,
		apiname: "ble_add_mobile",
		apiurl: "api/config/ble_add_mobile",

		codes: {
			//添加成功
			success: {
				code: 5040100,
				msg: "添加成功",
				sub_code: "mobile_add_success",
				sub_msg: "添加手机成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5040101,
				msg: "参数有误",
				sub_code: "mobile_add_faild_paramerror",
				sub_msg: "添加手机失败，添加参数不能为空",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			exist: {
				code: 5040102,
				msg: "数据已存在",
				sub_code: "mobile_add_faild_exist",
				sub_msg: "添加手机失败，该手机已存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "mobile_add_faild_syserror",
				sub_msg: "添加手机失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//获取扫描参数
	ble_get_scan: {
		code: 50402,
		apiname: "ble_get_scan",
		apiurl: "api/config/ble_get_scan",
		codes: {
			//添加成功
			success: {
				code: 5040200,
				msg: "获取成功",
				sub_code: "scan_get_success",
				sub_msg: "获取扫描参数成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5040201,
				msg: "无数据",
				sub_code: "scan_get_faild_nodata",
				sub_msg: "获取扫描参数失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "scan_set_faild_syserror",
				sub_msg: "获取扫描参数失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//获取扫描手机型号
	ble_get_scan_mobile: {
		code: 50403,
		apiname: "ble_get_scan_mobile",
		apiurl: "api/config/ble_get_scan_mobile",
		codes: {
			success: {
				code: 5040300,
				msg: "获取成功",
				sub_code: "scan_mobile_get_success",
				sub_msg: "获取扫描手机型号成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5040301,
				msg: "参数错误",
				sub_code: "scan_mobile_get_paramerror",
				sub_msg: "获取扫描手机型号失败，参数错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5040302,
				msg: "无数据",
				sub_code: "scan_mobile_get_faild_nodata",
				sub_msg: "获取扫描手机型号失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "scan_mobile_set_faild_syserror",
				sub_msg: "获取扫描手机型号失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//获取连接参数	
	ble_get_connect: {
		code: 50404,
		apiname: "ble_get_connect",
		apiurl: "api/config/ble_get_connect",
		codes: {
			//添加成功
			success: {
				code: 5040400,
				msg: "获取成功",
				sub_code: "connect_get_success",
				sub_msg: "获取连接参数成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5040401,
				msg: "无数据",
				sub_code: "connect_get_faild_nodata",
				sub_msg: "获取连接参数失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "connect_get_faild_syserror",
				sub_msg: "获取连接参数失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//获取连接手机型号
	ble_get_connect_mobile: {
		code: 50405,
		apiname: "ble_get_connect_mobile",
		apiurl: "api/config/ble_get_connect_mobile",
		codes: {
			success: {
				code: 5040500,
				msg: "获取成功",
				sub_code: "connect_mobile_get_success",
				sub_msg: "获取连接手机型号成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5040501,
				msg: "参数错误",
				sub_code: "connect_mobile_get_faild_paramerror",
				sub_msg: "获取连接手机型号失败，参数错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5040502,
				msg: "无数据",
				sub_code: "connect_mobile_get_faild_nodata",
				sub_msg: "获取连接手机型号失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "connect_mobile_get_faild_syserror",
				sub_msg: "获取连接手机型号失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//删除距离数据
	ble_del_mobile: {
		code: 50406,
		apiname: "ble_del_mobile",
		apiurl: "api/config/ble_del_mobile",
		codes: {
			success: {
				code: 5040600,
				msg: "删除成功",
				sub_code: "ble_del_mobile",
				sub_msg: "删除手机型号成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			noexist: {
				code: 5040601,
				msg: "数据不存在",
				sub_code: "ble_del_mobile_faild_noexist",
				sub_msg: "删除手机型号失败，该数据不存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5040602,
				msg: "参数有误",
				sub_code: "ble_del_mobile_faild_paramerror",
				sub_msg: "删除手机型号失败，参数不正确",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "ble_del_mobile_faild_syserror",
				sub_msg: "删除手机型号失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	
	//查询各个用户对应测试环境列表
	ble_env_query: {
		code: 50501,
		apiname: "ble_env_query",
		apiurl: "api/config/ble_env_query",
		codes: {
			success: {
				code: 5050100,
				msg: "查询成功",
				sub_code: "env_query_success",
				sub_msg: "获取各个用户对应测试环境列表成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5050101,
				msg: "参数错误",
				sub_code: "env_query_faild_paramerror",
				sub_msg: "获取各个用户对应测试环境列表失败，参数错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5050102,
				msg: "无数据",
				sub_code: "env_query_faild_nodata",
				sub_msg: "获取各个用户对应测试环境列表失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "cenv_query_faild_syserror",
				sub_msg: "获取各个用户对应测试环境列表失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//查询设备测试设备列表
	ble_device_query: {
		code: 50502,
		apiname: "ble_device_query",
		apiurl: "api/config/ble_device_query",
		codes: {
			success: {
				code: 5050200,
				msg: "查询成功",
				sub_code: "device_query_success",
				sub_msg: "获取设备测试设备列表成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5050201,
				msg: "参数错误",
				sub_code: "device_query_faild_paramerror",
				sub_msg: "获取设备测试设备列表失败，参数错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5050202,
				msg: "无数据",
				sub_code: "device_query_faild_nodata",
				sub_msg: "获取设备测试设备列表失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "device_query_faild_syserror",
				sub_msg: "获取设备测试设备列表失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//查询设备测试设备名称列表
	ble_name_query: {
		code: 50503,
		apiname: "ble_name_query",
		apiurl: "api/config/ble_name_query",
		codes: {
			success: {
				code: 5050300,
				msg: "查询成功",
				sub_code: "name_query_success",
				sub_msg: "获取设备测试设备名称列表成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5050301,
				msg: "参数错误",
				sub_code: "name_query_faild_paramerror",
				sub_msg: "获取设备测试设备名称列表失败，参数错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5050302,
				msg: "无数据",
				sub_code: "name_query_faild_nodata",
				sub_msg: "获取设备测试设备名称列表失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "name_query_faild_syserror",
				sub_msg: "获取设备测试设备名称列表失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//查询设备测试设备mac列表
	ble_mac_query: {
		code: 50504,
		apiname: "ble_mac_query",
		apiurl: "api/config/ble_mac_query",
		codes: {
			success: {
				code: 5050400,
				msg: "查询成功",
				sub_code: "mac_query_success",
				sub_msg: "获取设备测试设备mac列表成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 5050401,
				msg: "参数错误",
				sub_code: "mac_query_faild_paramerror",
				sub_msg: "获取设备测试设备mac列表失败，参数错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 5050402,
				msg: "无数据",
				sub_code: "mac_query_faild_nodata",
				sub_msg: "获取设备测试设备mac列表失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "mac_query_faild_syserror",
				sub_msg: "获取设备测试设备mac列表失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//ble链接数据导入
	upload_bleconnect: {
		code: 60101,
		apiname: "upload_bleconnect",
		apiurl: "api/upload/bleconnect",
		codes: {
			success: {
				code: 6010100,
				msg: "导入成功",
				sub_code: "upload_connect_success",
				sub_msg: "ble链接数据导入成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 6010101,
				msg: "参数错误",
				sub_code: "upload_connect_faild_paramerror",
				sub_msg: "ble链接数据导入失败，参数错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 6010102,
				msg: "无数据",
				sub_code: "upload_connect_faild_nodata",
				sub_msg: "ble链接数据导入失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			dberror: {
				code: 6010103,
				msg: "数据库错误",
				sub_code: "upload_connect_faild_db",
				sub_msg: "ble链接数据导入失败，数据库错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			fileexist:{
				code: 6010104,
				msg: "导入文件已存在",
				sub_code: "upload_connect_faild_fileexist",
				sub_msg: "ble链接数据导入失败，导入文件已存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "upload_connect_faild_syserror",
				sub_msg: "ble链接数据导入失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	},
	//ble扫面数据导入
	upload_blescan: {
		code: 60201,
		apiname: "upload_blescan",
		apiurl: "api/upload/blescan",
		codes: {
			success: {
				code: 6020100,
				msg: "导入成功",
				sub_code: "upload_scan_success",
				sub_msg: "ble扫描数据导入成功",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			paramerror: {
				code: 6020101,
				msg: "参数错误",
				sub_code: "upload_scan_faild_paramerror",
				sub_msg: "ble扫描数据导入失败，参数错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			nodata: {
				code: 6020102,
				msg: "无数据",
				sub_code: "upload_scan_faild_nodata",
				sub_msg: "ble扫描数据导入失败，没有数据",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			dberror: {
				code: 6020103,
				msg: "数据库错误",
				sub_code: "upload_scan_faild_db",
				sub_msg: "ble扫描数据导入失败，数据库错误",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			fileexist:{
				code: 6020104,
				msg: "导入文件已存在",
				sub_code: "upload_scan_faild_fileexist",
				sub_msg: "ble扫描数据导入失败，导入文件已存在",
				details: "",
				timestamp: new Date().getTime().toString()
			},
			syserror: {
				code: -1,
				msg: "系统错误",
				sub_code: "upload_scan_faild_syserror",
				sub_msg: "ble扫描数据导入失败，系统错误",
				details: "",
				timestamp: new Date().getTime().toString()
			}
		}
	}
};

module.exports = dict;