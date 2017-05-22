let app = angular.module('app');

app.controller('AppController',['$scope', ($scope) => {
  $scope.title = 'Title From AppController'
}])
