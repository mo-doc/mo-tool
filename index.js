var fs = require("fs");
// 指令配置
var DIRECTIVE_CONFIG = require("./util/config");

// var PATH  = require("./util/path");
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
	log.dbg(PATH.SERVICE_PATH+prefix_controller+controller+".js")
	!fs.existsSync(PATH.SERVICE_PATH+ prefix_controller+controller+".js")&&to_admin(controller+"文件不存在");
	require(prefix_controller+controller).apply(null,args.splice(3));
}else{
	!fs.existsSync(PATH.SERVICE_PATH + prefix_controller+"help.js")&&to_admin("help文件不存在");
	require(prefix_controller+"help")
}




