app.controller('ItemController', function ($scope, $routeParams, CatalogService) {
  const itemId = $routeParams.itemId;

  CatalogService.getCatalog().then(function (response) {
    $scope.product = response.data.find(item => item.id == itemId);
  });
});
