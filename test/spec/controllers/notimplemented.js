'use strict';

describe('Controller: NotimplementedCtrl', function () {

  // load the controller's module
  beforeEach(module('januszeInterfejsowApp'));

  var NotimplementedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotimplementedCtrl = $controller('NotimplementedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NotimplementedCtrl.awesomeThings.length).toBe(3);
  });
});
