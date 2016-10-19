// sample angular code

(function() {

  'use strict';

  angular
    .module('movie-search', [
      'ngRoute',
      'movie-search.config',
      'movie-search.components.main'
    ]);

})();
