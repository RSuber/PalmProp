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
        console.log("working");
        new GMaps({
          div: '#map',
          lat: -12.043333,
          lng: -77.028333
        });
      }]);
    };
  }, {}], 2: [function (require, module, exports) {
    module.exports = function (app) {
      app.controller('homeController', ['$scope', '$location', function ($scope, $location) {
        $scope.myInterval = 3000;
        $scope.slides = [{
          image: '/Images/StockSnap_L9VZ6SOGBB.jpg'
        }, {
          image: '/Images/StockSnap_Q5T8D3FB2E.jpg'
        }, {
          image: '/Images/StockSnap_QSZKSNAIYN.jpg'
        }, {
          image: '/Images/StockSnap_T77502ZQ5U.jpg'
        }];
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
      }).when('/gallery', {
        controller: 'homeController',
        templateUrl: 'templates/gallery.html'
      });
    }]);
  }, { "./Controllers/aboutController": 1, "./Controllers/homeController": 2 }] }, {}, [3]);