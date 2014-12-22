var fs = require("fs");
// 指令配置
var DIRECTIVE_CONFIG = require("./util/config");

// 命令参数
var args = process.argv;

// 日志
var log = require("./util/log");

var PKG_FILE ="package.json";

// 关键配置检测
require("./module/detect");

var pkg = JSON.parse(fs.readFileSync(PKG_FILE), 'utf8');



// 检测异常命令参数
if(args.length < 2)
	log.error("系统错误,参数问题"+args.toString());

// 获取使用指令
var controller = args[2];
var prefix_controller = "./controller/";
if(controller in DIRECTIVE_CONFIG){
	// try{
		require(prefix_controller+controller).apply(null,args.splice(3));
	// }catch(e){
		// log.error(controller+"文件不存在");
	// }
}else{
	try{
		require(prefix_controller+"help").apply(null,args.splice(3));
	}catch(e){
		log.error("help文件不存在");
	}
}




