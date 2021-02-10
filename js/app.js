var app = angular.module('app',['monospaced.qrcode','ngRoute']);
app.config(['$routeProvider', function config($routeProvider){
    $routeProvider.
        when('/',{
            templateUrl: 'views/forms.html',
            controller: 'MainController'
        }).
        when('/read_qrcode',{
            templateUrl: 'views/from_qrcode.html',
            controller: 'MainController'
        }).
        otherwise('/');
}]);
