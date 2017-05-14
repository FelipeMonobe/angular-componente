(function() {
  'use strict';

  angular
    .module('angularComponente')
    .controller('VermelhoController', VermelhoController);

  /** @ngInject */
  function VermelhoController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.teste = "TESTE";
  }
})();
