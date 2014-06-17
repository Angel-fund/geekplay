define(function(require, exports, module) {
  window.$ = window.jQuery = require('jquery');
  require('bootstrap');

  exports.load = function(name) {
    require.async('./' + name + '.js', function(controller){
      if ($.isFunction(controller.run)) {
        controller.run();
      }
    });
  };

/*var app = angular.module('app', ['ngSea']);

    app.config(['$routeProvider', "$controllerProvider", function ($routeProvider, $controllerProvider) {
        $routeProvider
            .when('/t1', {
                controller: 'testACtrl',
                templateUrl: './m1/t1.html',
                // 'controllerUrl': 'm1/t1'
            })
            .when('/t2',{
                controller: 'testBCtrl',
                templateUrl: '/home/contact',
                // templateUrl: './m2/t2.html',
                // 'controllerUrl': 'm2/t2'
            })
            

            .when('/', {
                controller: function ($scope, $routeParams, $location) {
                    $scope.str = new Date()
                },
                template: '<div>{{str}}</div>'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
    ]);

    app.run(["$rootScope", "$ngSea", function ($rootScope, $ngSea) {

        app = $ngSea(app);

    }]);*/

    // module.exports = app;

  window.load = exports.load;
});