define(['app'], function (app) {
 app.register.controller('RegisterController', ['$scope', '$http','$location', function ($scope, $http, $location) { 	 	
 	    var regApi = '/user';// /user/create';
 	     
 	    $scope.join = {username : '', email : '', password : ''}; 
 	    $scope.team = false;
 	    $scope.investor = true;
 	    $scope.select = function(type){
 	    	if(type == 'team'){ 	    		
    			$scope.team = false;
    			$scope.investor = true; 	    	
 	    	}else{
 	    		$scope.team = true;
    			$scope.investor = false; 	
 	    	} 	    	
 	    }

 	 	$scope.joinForm = function() {
 	 		console.log($scope.join);
 	 		// $http.post(regApi,$scope.join).success(function(data, status, headers, config){
     //            console.log(data);
	    //         }).error(function(data, status, headers, config){
	    //             alert("error");
	    //         });
	        }
	 	}]
	);   
});