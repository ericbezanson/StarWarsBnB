
app.controller('cribsController', ['$scope','cribsFactory', function($scope, cribsFactory) {
    $scope.cribs;

    $scope.priceInfo = {
        min: 0,
        max: 1000000000000
    }

    cribsFactory.success(function(data){
        $scope.cribs = data;
    });  
}]);