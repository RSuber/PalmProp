"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        module.exports = function (app) {
            app.controller('aboutController', ['$scope', '$location', function ($scope, $location) {
                console.log('faggot');
            }]);
        };
    }, {}], 2: [function (require, module, exports) {
        module.exports = function (app) {
            app.controller('homeController', ['$scope', function ($scope) {
                function CarouselDemoCtrl($scope) {
                    $scope.myInterval = 3000;
                    $scope.slides = [{
                        image: 'http://lorempixel.com/400/200/'
                    }, {
                        image: 'http://lorempixel.com/400/200/food'
                    }, {
                        image: 'http://lorempixel.com/400/200/sports'
                    }, {
                        image: 'http://lorempixel.com/400/200/people'
                    }];
                }
            }]);
        };
    }, {}], 3: [function (require, module, exports) {
        var app = angular.module('PalProp', ['ngRoute', 'ui.bootstrap']);
        require('./Controllers/aboutController')(app);
        require('./Controllers/homeController')(app);
        app.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                redirectTo: '/home'
            }).when('/home', {
                controller: 'homeController',
                templateUrl: 'templates/homepage.html'
            }).when('/about', {
                controller: 'aboutController',
                templateUrl: 'templates/about.html'
            }).when('/contact', {
                controller: 'aboutController',
                templateUrl: 'templates/contact.html'
            });
        }]);
    }, { "./Controllers/aboutController": 1, "./Controllers/homeController": 2 }] }, {}, [3]);