var fs = require("fs");
var log = require("../util/log");
var PKG = "package.json";
var path = require("path");

try{
	var pkg = JSON.parse(fs.readFileSync(PKG), 'utf8');
}catch(e){
	log.dbg("解析package.json文件出错");
}

['name','version','keywords','classify','code'].forEach(function(key){
	!(key in pkg) && log.dbg("package.json文件关键属性"+key+"缺失");
});

!fs.existsSync("README.md")&&log.dbg("README.md文件缺失");
!fs.existsSync("index.html")&&log.dbg("index.html文件缺失");