define(['app'], function (app) {
app.register.controller('IndexController', function ($scope, $window) {        
	 	// $scope.filterService = filterService;
	    $scope.username = 'Conan_Z';
	    $scope.customer = {
	      name: $scope.username,
	      address: '1600 Amphitheatre'
	    };

	    $scope.format = 'M/d/yy h:mm:ss';
	    var users = [{ name: 'osmen', address: 'Somewhere' },
	    	{ name: 'Igor', address: '123 tyhrtWe' },
	    	{ name: 'lucas', address: 'nier yo ko ' },
	    	{ name: 'geek', address: '34 sdg ggdg ydt' }]
	    $scope.users = users;
	    $scope.orderby = 'name'	;
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