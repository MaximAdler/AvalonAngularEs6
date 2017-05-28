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
        .component('loading', {
          bindings: {
            data: '<'
          },
          templateUrl: 'app/components/progress_bar/progress_bar.html'
        })
