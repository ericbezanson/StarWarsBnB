app.factory("cribsFactory",['$http', function($http){
  return $http.get('js/data/data.json') // send get get request to data.json file and return data is get request is successfull
  .success(function(data){
    return data;
  })
  .error(function(err){
    console.log(err)
    return err;
  });
}]);
