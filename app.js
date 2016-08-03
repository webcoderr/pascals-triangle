var app = angular.module('ptriangle', ['ngRoute','ngCookies']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/layout.html',
        controller: 'ptriangleController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);
