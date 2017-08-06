describe('studentList', function() {

  // Load the module `studentList` before each test
  beforeEach(module('studentList'));

  // Test the controller
  describe('StudentListController', function() {

      // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
      // This allows us to inject a service and assign it to a variable with the same name
      // as the service while avoiding a name conflict.
      beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      // fake http response
      $httpBackend.expectGET('api/students')
                  .respond([{"id": 101,
                      "name":"Carlos",
                      "active": true,
                      "grades": [ 2.3, 4.3, 5.0],
                      "yearsOld":15,
                      "color":"blue"
                      },
                      {
                      "id": 202,
                      "name":"Mark",
                      "active": true,
                      "grades": [ 3.3, 5.0, 3.0],
                      "yearsOld":18,
                      "color":"green"
                  }]);

      ctrl = $componentController('studentList');
      }));

      it('should create a `students` property with 2 students fetched with `$http`', function() {
      expect(ctrl.students).toBeUndefined();

      //flush the request
      $httpBackend.flush();
      expect(ctrl.students.length).toBe(2);
      });

      });

    });
