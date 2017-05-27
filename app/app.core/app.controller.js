let app = angular.module('app');

app.controller('AppController',['$scope', ($scope) => {
  $scope.filterName = '';
  $scope.filterProducts = '';
}])
