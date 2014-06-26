'use strict';
define(['angularAMD', 'angular-route','ui-bootstrap'], function (angularAMD) {
    var app = angular.module("app", ['ngRoute']);
    app.config(function ($routeProvider) {
        $routeProvider         
         .when('/', angularAMD.route({
                templateUrl: '/tpl/index.html', controller: 'IndexController'
            }))  
          .when('/project', angularAMD.route({
                templateUrl: '/tpl/project.html', controller: 'ProjectController'
            }))
          .when('/login', angularAMD.route({
                templateUrl: '/tpl/login.html', controller: 'LoginController'
            }))
          .when('/register', angularAMD.route({
                templateUrl: '/tpl/register.html', controller: 'RegisterController'
            }))
          .when('/doc', angularAMD.route({
                templateUrl: '/tpl/dev-doc.html'
            }))        
          .otherwise({redirectTo: '/'})        
    });
    /*common directive*/
    app.directive('genTabClick', function () {
        //<ul>
        //<li gen-tab-click="className"></li>
        //<li gen-tab-click="className"></li>
        //</ul>
        // 点击li元素时，该元素将赋予className类，并移除其它兄弟元素的className类
        return {
            link: function (scope, element, attr) {
                var className = attr.genTabClick;
                element.bind('click', function () {
                    element.parent().children().removeClass(className);
                    element.addClass(className);
                });
            }
        };
    });
    /*common filter*/
    /*common service*/
    angularAMD.bootstrap(app);
    return app;
});