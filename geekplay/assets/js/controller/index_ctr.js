define(['app'], function (app) {
app.register.controller('IndexController', function ($scope, $window) {        
	 	// $scope.filterService = filterService;	     
	    var project = [{ pic: 'http://img11.360buyimg.com/n1/g10/M00/1C/1C/rBEQWFNdtNEIAAAAAAFkbul1xFwAAFqJQLYG_kAAWSG188.jpg', 
    					 price:'3900',id:4,name: ' 独轮电动摩托' },
				    	{ price:'1200',id:1,name: '折叠自行车', pic: 'http://img11.360buyimg.com/n1/g10/M00/1C/1C/rBEQWFNdtNEIAAAAAAFkbul1xFwAAFqJQLYG_kAAWSG188.jpg' },
				    	{ price:'2499',id:2,name: 'UEB-e', pic: 'http://img11.360buyimg.com/n1/g10/M00/1C/1C/rBEQWFNdtNEIAAAAAAFkbul1xFwAAFqJQLYG_kAAWSG188.jpg' },
				    	{ price:'3800',id:3,name: 'yeiter baike', pic: 'http://img11.360buyimg.com/n1/g10/M00/1C/1C/rBEQWFNdtNEIAAAAAAFkbul1xFwAAFqJQLYG_kAAWSG188.jpg' },
				    	{ pic: 'http://img11.360buyimg.com/n1/g10/M00/1C/1C/rBEQWFNdtNEIAAAAAAFkbul1xFwAAFqJQLYG_kAAWSG188.jpg', 
    					 price:'3900',id:4,name: ' 独轮电动摩托' },
				    	{ price:'1900',id:1,name: '折叠自行车', pic: 'http://img11.360buyimg.com/n1/g10/M00/1C/1C/rBEQWFNdtNEIAAAAAAFkbul1xFwAAFqJQLYG_kAAWSG188.jpg' },
				    	{ price:'2499',id:2,name: 'UEB-e', pic: 'http://img11.360buyimg.com/n1/g10/M00/1C/1C/rBEQWFNdtNEIAAAAAAFkbul1xFwAAFqJQLYG_kAAWSG188.jpg' },
				    	{ price:'3500',id:3,name: 'yeiter baike', pic: 'http://img11.360buyimg.com/n1/g10/M00/1C/1C/rBEQWFNdtNEIAAAAAAFkbul1xFwAAFqJQLYG_kAAWSG188.jpg' }
			    	]
			    	,investors = [
			    		{username:'戴志康',post:'天使投资人',id:1,avatar:'http://img.36tr.com/avatar/20140526/5382c8f06dc43?imageView/1/w/108/h/108'}, 
			    		{username:'潘溶融',post:'清流资本',id:1,avatar:'http://img.36tr.com/avatar_image/20120607/52/07/31/a1356315406125.jpg?imageView/1/w/108/h/108'}, 
			    		{username:'余波',post:'创新谷',id:1,avatar:'http://img.36tr.com/avatar/20131105/5278c549d87c1?imageView/1/w/108/h/108'}, 
			    	];
	    $scope.project = project;
	    $scope.investors = investors;
	    $scope.category = [
	    					{name:'智能家居',id:1}, 
	    					{name:'交通',id:2}, 
	    					{name:'通信',id:3}
	    				];
	    $scope.greet= function(e){
	    	users.push({name:$scope.username,address:$scope.format}) 
	    	// alert(users);    	
	    }
	});
	app.register.directive('alert', function () {
	    //<ul>
	    //<li gen-tab-click="className"></li>
	    //<li gen-tab-click="className"></li>
	    //</ul>
	    // 点击li元素时，该元素将赋予className类，并移除其它兄弟元素的className类
	    return {
	        link: function (scope, element, attr) {
	            // var className = attr.genTabClick;
	            element.bind('click', function () {
	            	alert('hehe');
	                // element.parent().children().removeClass(className);
	                // element.addClass(className);
	            });
	        }
	    };
	});
});