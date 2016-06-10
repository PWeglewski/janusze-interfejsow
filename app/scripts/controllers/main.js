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
    var scope = this;
    scope.$route = $route;
    

    // if ($rootScope.user == undefined || !$rootScope.user.authenticated) {
    //   $window.location.href = '#/loginscreen'
    // }
    var superuser = {
      'username': 'superuser',
      'isSuperuser': true,
      'authenticated': true
    }

    $rootScope.user = superuser;

    scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    

    scope.project1 = {
      'showbody': false,
      'weekSummary': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
      'weekTotal': 0,
      'tasks': [
        {
          'name': 'Preparation',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Design',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Meeting',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Implementation',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Review',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Testing',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        }
      ]
    };
    
    scope.project2 = {
      'showbody': false,
      'weekSummary': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
      'weekTotal': 0,
      'tasks': [
        {
          'name': 'Preparation',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Design',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Meeting',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Implementation',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Review',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Testing',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        }
      ]
    };
    
    scope.project3 = {
      'showbody': false,
      'weekSummary': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
      'weekTotal': 0,
      'tasks': [
        {
          'name': 'Regular vocation',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Illness',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        },
        {
          'name': 'Training',
          'isDisplayed': false,
          'days': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
          'total': 0
        }
      ]
    };
    
    scope.overtime = {
      'showbody': false,
      'weekSummary': [{'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}, {'hours': 0}],
      'weekTotal': 0,
      'tasks': [
        {
          'name': 'Overtime',
          'isDisplayed': false,
          'days': [{'overtime': 0}, {'overtime': 0}, {'overtime': 0}, {'overtime': 0}, {'overtime': 0}],
          'total': 0,
        }
      ]
    };
    
    scope.calculate = function (project) {
      console.log('test');
      project.weekSummary.forEach(function(day, index){
        day.hours=0;
      });
      project.weekTotal=0;
      project.tasks.forEach(function (task, index) {
        task.total=0;
        task.days.forEach(function (day, index) {
          console.log(day.hours);
          var intHours = parseInt(day.hours);
          task.total+=intHours;
          project.weekSummary[index].hours+=intHours;
          project.weekTotal+=intHours;
        });
      });
      
      scope.overtime.weekSummary.forEach(function (day, index) {
        day.hours = 0;
        day.hours += scope.project1.weekSummary[index].hours;
        day.hours += scope.project2.weekSummary[index].hours;
        day.hours += scope.project3.weekSummary[index].hours;
      });
      scope.overtime.weekTotal = 0;
      scope.overtime.weekSummary.forEach(function (day, index) {
        scope.overtime.weekTotal += day.hours
        var zakres = 8;
        if(day.hours > zakres) {
          scope.overtime.tasks[0].days[index].overtime = day.hours;
          scope.overtime.tasks[0].days[index].overtime -= zakres;
        }
      });  
      console.log(project);
    };
    
    
    
    
  });
