
app.controller('cribsController', ['$scope','cribsFactory', function($scope, cribsFactory) {
    $scope.cribs;

    cribsFactory.success(function(data){
        $scope.cribs = data;
    });  
}]);