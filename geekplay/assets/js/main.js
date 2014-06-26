require.config({
    baseUrl: "js/bower_components",    
    paths: {
        'angular': 'angular/angular.min',
        'angular-route': 'angular-route/angular-route.min',
        'angularAMD': 'angularAMD/angularAMD.min',
        'ui-bootstrap': 'angular-bootstrap/ui-bootstrap',
        'ngload': 'angularAMD/ngload.min',
        'IndexController': '../controller/index_ctr',
        'LoginController': '../controller/login_ctr',
        'ProjectController': '../controller/project_ctr',
     	'RegisterController': '../controller/register_ctr',
    },
    shim: { 'angularAMD': ['angular'], 
            'ui-bootstrap': ['angular'],
            'angular-route': ['angular'],
            'ngload': ['angularAMD']
            },
    deps: ['app']
});