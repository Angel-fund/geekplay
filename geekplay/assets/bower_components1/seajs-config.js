seajs.config({
	base:'/bower_components/',
	alias:{
		'jquery':'jquery/dist/jquery.min.js',		
		"bootstrap": "bootstrap/dist/js/bootstrap.min.js",	
		// "directive": "directive/directive.js",	
	},
	// 预加载项
	preload: [
	this.JSON ? '' : 'json'],

	// 路径配置
	paths: {
		'common': 'common/'
	},

	// 变量配置
	vars: {
		'locale': 'zh-cn'
	},

	charset: 'utf-8',

	debug: true
});
