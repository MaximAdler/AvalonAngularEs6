app.controller('CompaniesController',['$scope', '$http', '$log', ($scope, $http, $log) => {

    $http.get('http://avalon.avalonfaltd.com:3090/companies')
         .then((resp)=>{
           $scope.companies = resp.data.success.filter((v)=>v.companyName != '' && v.companyName != null)
           console.log($scope.companies)
         })
}])
