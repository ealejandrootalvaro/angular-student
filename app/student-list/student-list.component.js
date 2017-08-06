//register the studenList component on the studentList module
angular.module('studentList').component('studentList', {

  templateUrl: 'student-list/student-list.template.html',

  controller: function StudentListController($http){

    var self = this;

    //make http request asking for the student list
    $http.get('api/students').then(function(response){
      self.students = response.data;
    });


  }
})
