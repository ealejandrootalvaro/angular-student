angular.
  module('studentDetail').
  component('studentDetail',{
    templateUrl: 'student-detail/student-detail.template.html',
    controller: ['$http','$routeParams',
      function StudentDetailController($http,$routeParams){

        var self = this;

        $http.get('api/students/'+$routeParams.studentId).then(function(response){
          self.student = response.data;

          var grades = self.student.grades;

          var sum = 0;

          for (var i = 0; i < grades.length; i++) {
            sum += grades[i];
          }

          self.student.average = (sum/grades.length).toFixed(2);

        });

      }]
  });
