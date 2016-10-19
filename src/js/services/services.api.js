(function() {
  'use strict';

  angular
    .module('api', [])
    .service('accessApi', AccessApi)

    AccessApi.$inject = ['$http']

    function AccessApi ($http) {
      this.movie = {}
      this.callApi = (query) => {
      return $http.get(`https://www.omdbapi.com/?s=${query}`)
        .then((movieData) => {
          this.movie = movieData
        })
        .catch((err) => {
          throw err;
        })
      }
      this.getMovieData = (movie) => {
        return $http.get(`https://www.omdbapi.com/?t=${movie}&y=&plot=short&r=json`)
        .then((movieData) => {
          this.movie = movieData.data
        })
        .catch((err) => {
          throw err;
        })
      }
    }

}());
