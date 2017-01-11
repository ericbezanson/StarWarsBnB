
app.controller('cribsController', ['$scope','cribsFactory', function($scope, cribsFactory) {
    $scope.cribs=[];

    $scope.priceInfo = { // set default date for priceInfo so that page is not blank on load
        min: 0,
        max: 1000000000000
    }
    cribsFactory.success(function(data){
        $scope.cribs = data;  // set json data to the $scope via "cribs"
    });  

    $scope.newListing = {}  // create an empty object for newListing which is filled out by user via html form and ng-modal

    $scope.addCrib = function(newListing) {
            newListing.image = 'img/swdefault';
            $scope.cribs.push(newListing); // takes the completed newListing json object and pushes it to the cribs json data array/ homepage
            $scope.newListing = {}; // reinitiates the new listing object as an empty object so another crib can be added
        }
}]);



