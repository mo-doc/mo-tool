var DIRECTIVE_CONFIG = require("../util/config");

function log(data){
	data&&console.log(data+"\n");
}

function listLog(key,text){
	key = ("mo-tool " + key+"                    ").substr(0,20);
	console.log(key+"****"+text+"****")
}

log("mo-tool使用指南，中文说明，你值得拥有。");
log("命令行列表");

for(key in DIRECTIVE_CONFIG){
	listLog(key,DIRECTIVE_CONFIG[key]);
}

log(" ");
log("如有任何使用问题，可直接邮件yuanxiang.yang@dianping.com。或直接找YYY");

process.exit(1);