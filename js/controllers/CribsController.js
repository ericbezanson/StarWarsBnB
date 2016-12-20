
app.controller('cribsController', ['$scope','cribsFactory', function($scope, cribsFactory) {
    $scope.cribs=[];

    $scope.priceInfo = { // set default date for priceInfo so that page is not blank on load
        min: 0,
        max: 1000000000000
    }


    $scope.newListing = {};

    
     $scope.addCrib = function(newListing) {
      if(newListing) {
        newListing.image = "img/swdefault";  //set default listing image
        $scope.cribs.push(newListing); //push data into new listing
        $scope.newListing = {}; // clear newlisting field 
        console.log($scope.cribs);
      }
    }
    cribsFactory.success(function(data){
        $scope.cribs = data;
    });  
}]);