(function() {

  'use strict';

  angular
    .module('movie-search.components.main')
    .controller('moviesController', moviesController);

  moviesController.$inject = ['$scope', 'accessApi'];

  function moviesController($scope, accessApi) {
    this.movieObj = () => accessApi.movie
    this.select = (movie) => {
      accessApi.getMovieData(movie)
      .then(() => console.log('success'))
    }
  }

})();
