app.controller('CompaniesController',['$scope', '$http', '$log', '$window', ($scope, $http, $log, $window) => {

    $scope.filterName = '';
    $scope.filterProducts = '';
    $scope.productsShow = false;
    $scope.editCompanyName = false;
    $scope.edited_company = [];

    $http.get('http://avalon.avalonfaltd.com:3090/companies')
         .then((resp)=>{
           $scope.companies = resp.data.success.filter((v)=>v.companyName != '' && v.companyName != null)
         })
     $scope.showProducts = (company) => {
       $scope.products = $scope.companies.filter((v)=>v.companyName == company)[0];
       $scope.productsShow = true;
     }

     $scope.addCompany = () => {
       if($scope.new_company != ''){
         $http.post('http://avalon.avalonfaltd.com:3090/companies', {
             'companyName': $scope.new_company,
             'companyGoods': ['A1','A2']
         })
              .then(()=>{
                console.log('Успешно добавлена!')
                $window.location.reload();
              })
        }
        return false;
     }
     $scope.addProduct = () => {
       if($scope.new_product != ''){
        //  $http.post('http://avalon.avalonfaltd.com:3000/companies')
       }
     }

     $scope.deleteCompany = (company_name) => {
       $http.delete('http://avalon.avalonfaltd.com:3090/companies/' + company_name)
            .then(()=>{
              console.log('Успешно удалена!')
              $window.location.reload();
            })
     }

     $scope.editCompany = (company_name, index) => {
       $scope.editCompanyName = false;
       if($scope.edited_company.length != 0){
         $http.put('http://avalon.avalonfaltd.com:3090/companies/' + company_name,{
           'companyName': $scope.edited_company[index],
           'companyGoods': ['A1','A2']
         })
              .then(()=>{
                console.log('Успешно изменено!')
                $window.location.reload();
              })
       } else {
         $window.location.reload();
       }
     }
}])
