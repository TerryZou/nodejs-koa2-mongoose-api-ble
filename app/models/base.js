var conn = require('../dbconnect/dbconnect');
var dbutil = require('../../utils/db_util');

exports.model = (tbl, schema) => {
	//创建model
	var t = conn.model(tbl, schema, tbl);
	//插入一条数据
	this.add = async(obj) => {
		try {
			var result = {
				id: "",
				succ: false
			};
			result = await addobj(t, obj);
			return result;
		} catch(e) {
			throw e;
		}
	};

	//获取多条数据
	this.query = async(params, sort, count) => {
		try {
			var result = {
				succ: false,
				data: null
			};
			// fields 和 options 都是可选参数
			result = await query(t, params, sort, count);
			return result;
		} catch(e) {
			throw e;
		}
	};

	//获取条数
	this.count = async(params) => {
		try {
			var result = {
				succ: false,
				data: null
			};
			// fields 和 options 都是可选参数
			result = await count(t, params);
			return result;
		} catch(e) {
			throw e;
		}
	};

	//获取一条数据
	this.findOne = async(params) => {
		try {
			var result = {
				succ: false,
				data: null
			};
			result = await findOne(t, params);
			return result;
		} catch(e) {
			throw e;
		}
	};

	this.update = async(params, obj) => {
		try {
			var result = {
				succ: false,
				data: null
			};
			// fields 和 options 都是可选参数
			result = await updateobj(t, params, obj);
			return result;
		} catch(e) {
			throw e;
		}
	};

	this.remove = async(params) => {
		try {
			var result = {
				succ: false,
				data: null
			};
			// fields 和 options 都是可选参数
			result = await removeobj(t, params);
			return result;
		} catch(e) {
			throw e;
		}
	};

	this.aggregate = async(params) => {
		var result = {
			succ: false,
			data: null
		};
		result = await aggregate(t, params);
		return result;
	};

	this.mapReduce = async(o) => {
		var result = {
			succ: false,
			data: null
		};
		result = await mapReduce(t, o);
		return result;
	};
	return this;
};

function addobj(t, obj) {
	return new Promise(function(resolve, reject) {
		var m = new t(obj);
		m.save((err, doc, n) => {
			if(!err) {
				if(n == 1) {
					resolve({
						succ: true,
						id: m._id,
						status: 1
					});
				} else {
					resolve({
						succ: true,
						id: "",
						status: 0
					});
				}
			} else {
				resolve({
					succ: false,
					id: "",
					status: -1
				});
			}
		});
	});
}

//函数返回promise
function updateobj(t, params, obj) {
	return new Promise(function(resolve, reject) {
		t.update(params, {
			$set: obj
		}, (err, res) => {
			if(!err) {
				if(res.nModified > 0) {
					resolve({
						succ: true,
						status: 1
					});
				} else {
					resolve({
						succ: true,
						status: 0
					});
				}
			} else {
				resolve({
					succ: false,
					status: -1
				});
			}
		});
	});
}

//函数返回promise
function removeobj(t, params) {
	return new Promise(function(resolve, reject) {
		t.remove(params, (err, doc) => {
			if(!err) {
				if(doc.result.n > 0) {
					resolve({
						succ: true,
						status: 1
					});
				} else {
					resolve({
						succ: true,
						status: 0
					});
				}
			} else {
				resolve({
					succ: false,
					status: -1
				});
			}
		});
	});
}

function findOne(t, params) {
	return new Promise(function(resolve, reject) {
		t.findOne(params, (err, doc) => {
			if(!err) {
				if(doc != null) {
					resolve({
						succ: true,
						data: doc,
						status: 1
					});
				} else {
					resolve({
						succ: true,
						data: null,
						status: 0
					});
				}
			} else {
				resolve({
					succ: false,
					data: null,
					status: -1
				});
			}
		});
	});
}

function query(t, params, sort, count) {
	return new Promise(function(resolve, reject) {
		if(sort != undefined && count != undefined) {
			t.find(params).sort(sort).limit(count).exec((err, doc) => {
				if(!err) {
					if(doc != null&&doc.length>0) {
						resolve({
							succ: true,
							data: doc,
							status: 1
						});
					} else {
						resolve({
							succ: true,
							data: null,
							status: 0
						});
					}
				} else {
					resolve({
						succ: false,
						data: null,
						status: -1
					});
				}
			});
		} else if(sort != undefined && count == undefined) {
			t.find(params).sort(sort).exec((err, doc) => {
				if(!err) {
					if(doc != null&&docs.length>0) {
						resolve({
							succ: true,
							data: doc,
							status: 1
						});
					} else {
						resolve({
							succ: true,
							data: null,
							status: 0
						});
					}
				} else {
					resolve({
						succ: false,
						data: null,
						status: -1
					});
				}
			});
		} else {
			t.find(params, (err, doc) => {
				if(!err) {
					if(doc != null && doc.length > 0) {
						resolve({
							succ: true,
							data: doc,
							status: 1
						});
					} else {
						resolve({
							succ: true,
							data: null,
							status: 0
						});
					}
				} else {
					resolve({
						succ: false,
						data: null,
						status: -1
					});
				}
			});
		}
	});
}

function count(t, params) {
	return new Promise(function(resolve, reject) {
		t.count(params, (err, doc) => {
			if(!err) {
				if(doc != null) {
					resolve({
						succ: true,
						data: doc,
						status: 1
					});
				} else {
					resolve({
						succ: true,
						data: null,
						status: 0
					});
				}
			} else {
				resolve({
					succ: false,
					data: null,
					status: -1
				});
			}
		});
	});
}

function aggregate(t, params) {
	return new Promise(function(resolve, reject) {
		t.aggregate(params).exec((err, docs) => {
			if(!err) {
				if(docs != null&&docs.length>0) {
					resolve({
						succ: true,
						data: docs,
						status: 1
					});
				} else {
					resolve({
						succ: true,
						data: null,
						status: 0
					});
				}
			} else {
				resolve({
					succ: false,
					data: null,
					status: -1
				});
			}
		});
	});
}

function mapReduce(t, o) {
	return new Promise(function(resolve, reject) {
		t.mapReduce(o, (err, docs) => {
			if(!err) {
				if(docs != null&&docs.length>0) {
					resolve({
						succ: true,
						data: docs,
						status: 1
					});
				} else {
					resolve({
						succ: true,
						data: null,
						status: 0
					});
				}
			} else {
				resolve({
					succ: false,
					data: null,
					status: -1
				});
			}
		});
	});
}