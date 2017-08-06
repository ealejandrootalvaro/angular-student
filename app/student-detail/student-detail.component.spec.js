'use strict';

describe('studentDetail', function() {

  // Load the module `studentDetail` before each test
  beforeEach(module('studentDetail'));

  // Test the controller
  describe('StudentDetailController', function() {

    var $httpBackend, ctrl;
    var studentData = {"id": 101,
        "name":"Carlos",
        "active": true,
        "grades": [ 2.3, 4.3, 5.0],
        "yearsOld":15,
        "color":"blue"
      };

      // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
      // This allows us to inject a service and assign it to a variable with the same name
      // as the service while avoiding a name conflict.
      beforeEach(inject(function($componentController, _$httpBackend_,$routeParams) {
      $httpBackend = _$httpBackend_;
      // fake http response
      $httpBackend.expectGET('api/students/101')
                  .respond(studentData);

      $routeParams.studentId = '101';

      ctrl = $componentController('studentDetail');
      }));

      it('should fetch the studen details', function() {

        jasmine.addCustomEqualityTester(angular.equals);

        expect(ctrl.student).toEqual({});

        //flush the request
        $httpBackend.flush();
        expect(ctrl.student.name).toBe(studentData.name);
      });

      it('should compute the average grade', function(){
        jasmine.addCustomEqualityTester(angular.equals);

        expect(ctrl.student).toEqual({});

        //flush the request
        $httpBackend.flush();
        
        expect(ctrl.student.average).toBe('3.87');
      })



      });

    });
