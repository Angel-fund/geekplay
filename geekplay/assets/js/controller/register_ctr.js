define(['app'], function (app) {
 app.register.controller('RegistController', ['$scope', '$http',function ($scope, $http) {      
 	 	
 	    // var users = [{ name: 'osmen1', address: 'Somewhere' },
 	    // 	{ name: 'Igor1', address: '123 tyhrtWe' },
 	    // 	{ name: 'lucas', address: 'nier yo ko ' },
 	    // 	{ name: 'geek', address: '34 sdg ggdg ydt' }]
 	     $http.get('/user/regist').success(function(res){
                $scope.users=res.data;
            })
 	    // $scope.users = users;
 	    $scope.username = 'ssdafks;ofis;ofg;sog';
 	 
 	}]);   
});