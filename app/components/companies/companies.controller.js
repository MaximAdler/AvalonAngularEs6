app.controller('CompaniesController',['$scope', '$http', '$log', ($scope, $http, $log) => {

    $scope.filterName = '';
    $scope.filterProducts = '';
    $scope.productsShow = false;

    $http.get('http://avalon.avalonfaltd.com:3090/companies')
         .then((resp)=>{
           $scope.companies = resp.data.success.filter((v)=>v.companyName != '' && v.companyName != null)
           console.log($scope.companies)


         })
     $scope.showProducts = (company) => {
       $scope.products = $scope.companies.filter((v)=>v.companyName == company)[0];
       console.log($scope.products)
       $scope.productsShow = true;
     }

}])
