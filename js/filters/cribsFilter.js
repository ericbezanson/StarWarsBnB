app.filter('cribsFilter', function(){
    return function(listings, priceInfo){ // return an array of filtered items
       
        var filtered = []; //initialize filter array

        var min = priceInfo.min; // variable to ref min price coming from priceInfo argument in function
        var max = priceInfo.max; // variable to ref max price coming from priceInfo argument in funciton

        angular.forEach(listings, function(listing){ // use ang helper function forEach to iterate over listings passed in
            if (listing.price >= min && listing.price <= max) { //if listing price is greater or equal to min and less than or equal to max..
                filtered.push(listing); //... push listing to filtered array
            }
        });
        return filtered; // once complete return filtered array 
    }
});