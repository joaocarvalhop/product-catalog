app.controller('MainController', function ($scope, CatalogService) {
  $scope.products = [];
  $scope.filterText = '';
  $scope.sortType = 'title';

  CatalogService.getCatalog().then(function (response) {
    $scope.products = response.data;
  });

  $scope.setSortType = function (type) {
    $scope.sortType = type;
  };
});
