'use strict';

angular
  .module('schooldataApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'localytics.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/schools/:schoolId', {
        templateUrl: 'views/school.html',
        controller: 'SchoolCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
