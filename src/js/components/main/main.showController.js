(function() {

  'use strict';

  angular
    .module('movie-search.components.main')
    .controller('showController', showController);

  showController.$inject = ['$scope', 'accessApi'];

  function showController($scope, accessApi) {
    this.movie = () => accessApi.movie
  }

})();
