(function() {
  'use strict';

  angular
    .module('api', [])
    .service('accessApi', AccessApi)

    AccessApi.$inject = ['$http']

    function AccessApi ($http) {
      this.callApi = (query) => {
      return $http.get(`http://www.omdbapi.com/?s=${query}`)
      .then((movieData) => {
        return movieData.data
      })
      .catch((err) => {
        throw err;
      })
    }
  }

}());
