(function() {
  'use strict';

  angular
    .module('videosBandClient')
    .component('menuPrograms', {

    	bindings: {
    		id: '@',
    		label: '@',
    		model: '='
    	},
    	templateUrl: 'app/components/menuPrograms/menuPrograms.html'
    });

})();
