var http = require("http");
var PKG_FILE  = "package.json";
var http = require("http");
var querystring = require('querystring')
var fs = require('fs');
var cp = require("child_process");

module.exports = function(){
	var pkg = fs.readFileSync(PKG_FILE).toString("UTF-8");
	var intro =fs.readFileSync("README.md").toString("UTF-8");
	var data = querystring.stringify({
		package:pkg,
		intro:intro
	});  

	var opt = {  
        method: "POST",  
        host: "192.168.7.94",  
        port: 3000,  
        path:"/api/component/autoadd",
        headers: {  
            "Content-Type": 'application/x-www-form-urlencoded',
        	"Content-Length": data.length
        }
    };  
	var req = http.request(opt,function (res) {  
    }); 

	req.write(data + "\n");

    req.end();  

    console.log("正在发布中，等会就好了。");

    setTimeout(function(){
        process.exit()
    },2000)
   
}