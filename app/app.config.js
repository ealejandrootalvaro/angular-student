
// Link routes with templates

angular.
  module('pruebaApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/students', {
          template: '<student-list></student-list>'
        }).
        when('/students/:studentId', {
          template: '<student-detail></student-detail>'
        }).
        otherwise('/students');
    }
  ]);
