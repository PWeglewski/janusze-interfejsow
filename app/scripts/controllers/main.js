'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('januszeInterfejsowApp')
  .controller('MainCtrl', function ($rootScope, $window, $route) {
    this.$route = $route;

    // if ($rootScope.user == undefined || !$rootScope.user.authenticated) {
    //   $window.location.href = '#/loginscreen'
    // }
    var superuser = {
      'username': 'superuser',
      'isSuperuser': true,
      'authenticated': true
    }

    $rootScope.user = superuser;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.project1 = {
      'tasks':[
        {'name':'Preparation'},
        {'name':'Design'},
        {'name':'Meeting'},
        {'name':'Implementation'},
        {'name':'Review'},
        {'name':'Testing'}
      ]
    };
  });
