(function() {

  'use strict';

  angular
    .module('movie-search.components.main', ['api'])
    .controller('mainController', mainController);

  mainController.$inject = ['$scope', 'accessApi'];

  function mainController($scope, accessApi) {
    this.test = "this is a test"
    this.movieObj = {}
    this.search = (text) => {
      accessApi.callApi(text)
      .then((data) => {
        this.movieObj = data
        console.log(data);
      })
    }
  }

})();
