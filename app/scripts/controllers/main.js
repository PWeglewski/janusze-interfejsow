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
      'username':'superuser',
      'isSuperuser': true,
      'authenticated':true
    }

    $rootScope.user = superuser;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
