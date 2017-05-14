(function() {
  'use strict';

  angular
    .module('angularComponente')
    .controller('VerdeController', VerdeController);

  /** @ngInject */
  function VerdeController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.teste = "TESTE";
  }
})();
