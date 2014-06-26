define(['app'], function (app) {
 app.register.controller('ProjectController', ['$scope', '$http',function ($scope, $http) {      
 	 	
 	    // var users = [{ name: 'osmen1', address: 'Somewhere' },
 	    // 	{ name: 'Igor1', address: '123 tyhrtWe' },
 	    // 	{ name: 'lucas', address: 'nier yo ko ' },
 	    // 	{ name: 'geek', address: '34 sdg ggdg ydt' }]
 	     // $http.get('/projects/discover').success(function(res){
       //          $scope.users=res.data;
       //      })
 	     $scope.signup = {email : '',password:'',username:''}; 
 	    // $scope.users = users;
 	 
 	}]);   
});