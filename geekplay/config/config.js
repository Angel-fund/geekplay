'use strict';
var config = {};
config.stmp = {
		  // host: "smtp.qq.com", // 主机
		  // secureConnection: true, // 使用 SSL
		  // port: 465, // SMTP 端口
		  // auth: {
		  //   user: "547608958@qq.com", // 账号
		  //   pass: "*****" // 密码
		  // }
		   	service: "Gmail",
		    auth: {
		        user: "lijiguan1@gmail.com",
		        pass: "******"
		    }

		};

config.site = {
				domain : 'http://www.geeksty.com',
				siteName : '极客工业'
			};
module.exports = config;