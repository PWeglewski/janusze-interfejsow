'use strict';

/**
 * @ngdoc function
 * @name januszeInterfejsowApp.controller:NotimplementedCtrl
 * @description
 * # NotimplementedCtrl
 * Controller of the januszeInterfejsowApp
 */
angular.module('januszeInterfejsowApp')
  .controller('NotimplementedCtrl', function ($route) {
    this.$route = $route;
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
