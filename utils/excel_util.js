const xlsx = require("xlsx");

//const workbook = xlsx.readFile("excel.xlsx", opts);

exports.generateExcel = (path, headers, data) => {
		var result = false;
		try {
			//	var _headers = ['id', 'name', 'age', 'country', 'remark']
			//	var _data = [{
			//		id: '1',
			//		name: 'test1',
			//		age: '30',
			//		country: 'China',
			//		remark: 'hello'
			//	}, {
			//		id: '2',
			//		name: 'test2',
			//		age: '20',
			//		country: 'America',
			//		remark: 'world'
			//	}, {
			//		id: '3',
			//		name: 'test3',
			//		age: '18',
			//		country: 'Unkonw',
			//		remark: '???'
			//	}];

			var sheetNames = new Array();
			var sheets = {};
			for (var hi = 0; hi < headers.length; hi++) {
				var h = headers[hi].headers.map((v, i) => Object.assign({}, {
					v: v.h,
					position: String.fromCharCode(65 + i) + 1
				})).reduce((prev, next) => Object.assign({}, prev, {
					[next.position]: {
						v: next.v
					}
				}), {});
				var d = data[hi].map((v, i) => headers[hi].headers.map((k, j) => Object.assign({}, {
					v: v[k.f],
					position: String.fromCharCode(65 + j) + (i + 2)
				}))).reduce((prev, next) => prev.concat(next)).reduce((prev, next) => Object.assign({}, prev, {
					[next.position]: {
						v: next.v
					}
				}), {});

				// 合并 headers 和 data
				var output = Object.assign({}, h, d);
				// 获取所有单元格的位置
				var outputPos = Object.keys(output);
				// 计算出范围
				var ref = outputPos[0] + ':' + outputPos[outputPos.length - 1];
				sheetNames.push(headers[hi].name);
				sheets[headers[hi].name] = Object.assign({}, output, {
					'!ref': ref
				});
			}
			// 构建 workbook 对象
			var wb = {
				SheetNames: sheetNames,
				Sheets: sheets
			};
			

			// 导出 Excel
			xlsx.writeFile(wb, process.cwd()+path);
			result = true;
		} catch (e) {
		}
		return result;
		
};
