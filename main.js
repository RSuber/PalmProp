let app = angular.module('PalProp', ['ngRoute','ui.bootstrap']);
require('./Controllers/aboutController')(app);
require('./Controllers/homeController')(app);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/home',
        })
        .when('/home', {
            controller: 'homeController',
            templateUrl: 'templates/homepage.html',
        })
        .when('/about', {
            controller: 'aboutController',
            templateUrl: 'templates/about.html',
        })
        .when('/contact', {
            controller: 'aboutController',
            templateUrl: 'templates/contact.html',
        })
        .when('/gallery', {
          controller:'homeController',
          templateUrl:'templates/gallery.html',
        })
}]);
