(function() {
  'use strict';

  angular
    .module('angularComponente')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
