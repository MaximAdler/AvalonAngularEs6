angular.module('app',[])
        .component('parheader', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/header/header.html'
        })
        .component('companies', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/companies/companies.html'
        })
