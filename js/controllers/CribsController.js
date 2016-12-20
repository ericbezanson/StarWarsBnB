
app.controller('cribsController', ['$scope','cribsFactory', function($scope, cribsFactory) {
    $scope.cribs;

    $scope.priceInfo = { // set default date for priceInfo so that page is not blank on load
        min: 0,
        max: 1000000000000
    }


    $scope.newListing = {}

    $scope.addCrib = function(newListing) {
            newListing.image = 'www.placehold.it/350x250';
            $scope.cribs.push(newListing);
            $scope.newListing = {};
        }
    cribsFactory.success(function(data){
        $scope.cribs = data;
    });  
}]);