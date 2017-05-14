(function() {
  'use strict';

  angular
    .module('angularComponente')
    .component('menuPrograms', {
      templateUrl: 'app/components/menuPrograms/menuPrograms.html',
      controller: function($route, $http) {
        'ngInject';

        const vm = this;

        vm.$onInit = request;
        vm.model = $route.current.params.e;
        vm.response = {};

        function request() {
          if (!vm.model) return;

          const url = 'https://localhost:3000/' + vm.model;
          return $http
            .get(url)
            .then(function(res) {
              vm.response = res;
            });
        }
      },
      controllerAs: 'vm',
    });
})();
