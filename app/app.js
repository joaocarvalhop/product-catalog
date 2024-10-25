let app = angular.module('catalogApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/catalog', {
            templateUrl: 'app/views/catalog.html',
            controller: 'MainController'
        })
        .when('/item/:itemId', {
            templateUrl: 'app/views/item.html',
            controller: 'ItemController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
