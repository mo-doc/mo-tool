var util = require("lodash");

module.exports = {
	// 用户报错
	dbg:function(data){
		console.log(util.isObject(data) ? JSON.stringify(data) : data.toString());	
		process.exit(1);
	},
	// 系统报错
	error:function(data){
		console.log(data);
		process.exit(1);
	},
	// 用户提示
	info:function(){
		console.log(data.toString());
	}
}