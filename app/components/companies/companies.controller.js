app.controller('CompaniesController',['$scope', '$http', '$log', '$window', ($scope, $http, $log, $window) => {

    $scope.filterName = '';
    $scope.filterProducts = '';
    $scope.productsShow = false;
    $scope.editCompanyName = false;
    $scope.uniq_company_name = false;
    $scope.uniq_edited_company_name = false;
    $scope.edited_company = [];
    $scope.edited_product = [];

    $http.get('http://avalon.avalonfaltd.com:3090/companies')
         .then((resp)=>{
           $scope.companies = resp.data.success.filter((v)=>v.companyName != '' && v.companyName != null)
         })
     $scope.showProducts = (company) => {
       $scope.products = $scope.companies.filter((v)=>v.companyName == company)[0];
       $scope.productsShow = true;
     }

     $scope.addCompany = () => {
       let isUniqName = $scope.companies.map((v)=>v = v.companyName).indexOf($scope.new_company) == -1
       if($scope.new_company != '' && isUniqName){
         $scope.uniq_company_name = false;
         $http.post('http://avalon.avalonfaltd.com:3090/companies', {
             'companyName': $scope.new_company,
             'companyGoods': []
         })
              .then(()=>{
                console.log('Успешно добавлена!')
                $window.location.reload();
              })
        } else if(!isUniqName){
          $scope.uniq_company_name = true;
        }
        return false;
     }
     $scope.addProduct = (company_name,company_goods) => {
       if($scope.new_product != ''){
         company_goods.push($scope.new_product)
         $http.put('http://avalon.avalonfaltd.com:3090/companies/' + company_name, {
           'companyName': company_name,
           'companyGoods': company_goods
         })
              .then(()=>{
                $scope.new_product = '';
              })
       }
     }

     $scope.deleteCompany = (company_name) => {
       $http.delete('http://avalon.avalonfaltd.com:3090/companies/' + company_name)
            .then(()=>{
              console.log('Успешно удалена!')
              $window.location.reload();
            })
     }
     $scope.deleteProduct = (company_goods,company_name, index) => {
       company_goods.splice(index[0],1)
       $http.put('http://avalon.avalonfaltd.com:3090/companies/' + company_name, {
         'companyName': company_name,
         'companyGoods': company_goods
       })
     }

     $scope.editCompany = (company_name, company_goods, index) => {
       $scope.editCompanyName = false;
       let isUniqName = $scope.companies.map((v)=>v = v.companyName).indexOf($scope.edited_company[index]) == -1
       if(isUniqName){
         $scope.uniq_edited_company_name = false;
         if($scope.edited_company.length != 0){
           $http.put('http://avalon.avalonfaltd.com:3090/companies/' + company_name,{
             'companyName': $scope.edited_company[index],
             'companyGoods': company_goods
           })
                .then(()=>{
                  console.log('Успешно изменено!')
                  $window.location.reload();
                })
         } else {
           $window.location.reload();
         }
       }
       $scope.uniq_edited_company_name = true;
     }
     $scope.editProduct = (company_goods, company_name, index) => {
       company_goods.splice(index[0],1)
       company_goods.push($scope.edited_product[index])
       if($scope.edited_product.length != 0){
       $http.put('http://avalon.avalonfaltd.com:3090/companies/' + company_name, {
         'companyName': company_name,
         'companyGoods': company_goods
       })
      }
     }
}])
