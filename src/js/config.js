(function() {

  'use strict';

  angular
    .module('movie-search.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/components/main/main.home.html',
        controller: 'mainController',
        controllerAs: 'mainCtrl'
      })
      .when('/:movie', {
        templateUrl: 'js/components/main/main.show.html',
        controller: 'showController',
        controllerAs: 'showCtrl'
      })
      .otherwise('/')
  }

})();
