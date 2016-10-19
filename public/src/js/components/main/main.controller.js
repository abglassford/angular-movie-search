(function() {

  'use strict';

  angular
    .module('movie-search.components.main', ['api'])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'accessApi', '$location'];

  function mainController($scope, accessApi, $location) {
    this.search = (text) => {
      accessApi.callApi(text)
      .then(() => {
        this.query = null
        $location.path('/')
      })
      .catch((err) => {throw err;})
    }

  }

})();
