'use strict';

/**
 * @ngdoc overview
 * @name januszeInterfejsowApp
 * @description
 * # januszeInterfejsowApp
 *
 * Main module of the application.
 */
angular
  .module('januszeInterfejsowApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        activetab: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        activetab: 'about'
      })
      .when('/loginscreen', {
        templateUrl: 'views/loginscreen.html',
        controller: 'LoginscreenCtrl',
        controllerAs: 'loginscreen',
        activetab: 'loginscreen'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users',
        activetab: 'users'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects',
        activetab: 'projects'
      })
      .when('/reports', {
        templateUrl: 'views/reports.html',
        controller: 'ReportsCtrl',
        controllerAs: 'reports',
        activetab: 'reports'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'logout',
        activetab: 'logout'
      })
      .when('/notimplemented', {
        templateUrl: 'views/notimplemented.html',
        controller: 'NotimplementedCtrl',
        controllerAs: 'notimplemented',
        activetab: 'notimplemented'
      })
      .when('/notimplemented', {
        templateUrl: 'views/notimplemented.html',
        controller: 'NotimplementedCtrl',
        controllerAs: 'notimplemented'
      })
      .otherwise({
        redirectTo: '/loginscreen'
      });
  });
