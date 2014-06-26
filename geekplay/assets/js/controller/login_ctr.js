define(['app'], function (app) {
	app.register.controller('LoginController', ['$scope', '$http',function ($scope, $http) {
		 	// $scope.filterService = filterService;
		    $scope.signup = {email : '',password:'',username:''};    
		    $scope.signForm = function(){
		    	// users.push({name:$scope.username,address:$scope.format}) 
		    	console.log($scope.signup);   	
		    }
		}]
	);
//  <input  type="text" name="username" ng-model="signup.username" ensure-unique="username"/> 
	app.register.directive('ensureUnique', ['$http', function($http) {
		// app.directive('ensureUnique', ['$http', function($http) {
	  	return {
		    require: 'ngModel',
		    link: function(scope, ele, attrs, c) {
		      scope.$watch(attrs.ngModel, function() {
		        $http({
		          method: 'POST',
		          url: '/api/check/' + attrs.ensureUnique,
		          data: {'field': attrs.ensureUnique}
		        }).success(function(data, status, headers, cfg) {
		          c.$setValidity('unique', data.isUnique);
		        }).error(function(data, status, headers, cfg) {
		          c.$setValidity('unique', false);
		        });
		      });
		    }
		  }
		}]);
	// 	});
});