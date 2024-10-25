app.service('CatalogService', function($http) {
  this.getCatalog = function() {
      return $http.get('https://fakestoreapi.com/products');
  };
});
