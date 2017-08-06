
//register the studenList component on the studentList module
angular.
  module('studentDetail').
  component('studentDetail',{
    templateUrl: 'student-detail/student-detail.template.html',
    controller: ['$http','$routeParams',
      function StudentDetailController($http,$routeParams){

        var self = this;

        self.student = {};

        self.getGradeClass = function(grade){
          return (grade < 3 ? 'grade-red' : (grade >= 3 && grade < 3.9) ? 'grade-yellow' : 'grade-green');
        }


        //make http request asking for the student with the given id
        $http.get('api/students/'+$routeParams.studentId).then(function(response){

          self.student = response.data;

          // compute the average of the graddes

          var sum = 0;
          var grades = self.student.grades;

          for (var i = 0; i < grades.length; i++) {
            sum += grades[i];
          }

          self.student.average = (sum/grades.length).toFixed(2);

        });

      }]
  });
