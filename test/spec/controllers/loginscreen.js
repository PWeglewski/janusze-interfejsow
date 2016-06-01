'use strict';

describe('Controller: LoginscreenCtrl', function () {

  // load the controller's module
  beforeEach(module('januszeInterfejsowApp'));

  var LoginscreenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginscreenCtrl = $controller('LoginscreenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoginscreenCtrl.awesomeThings.length).toBe(3);
  });
});
