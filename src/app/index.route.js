(function() {
  'use strict';

  angular
    .module('angularComponente')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
      })
      .when('/verde', {
        templateUrl: 'app/verde/verde.html',
        controller: 'VerdeController',
        controllerAs: 'verde',
      })
      .when('/vermelho', {
        templateUrl: 'app/vermelho/vermelho.html',
        controller: 'VermelhoController',
        controllerAs: 'vermelho',
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
