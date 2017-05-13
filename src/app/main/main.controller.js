(function() {
  'use strict';

  angular
    .module('angularComponente')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.teste = "TESTE";
  }
})();
