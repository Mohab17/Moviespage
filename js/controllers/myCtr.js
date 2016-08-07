function myCtr($scope, movies) {

 $scope.movies;
 
 
 $scope.showData = function( ){
 
 
 movies.getMovies().then(function (response) {

   
   $scope.movies = response.data ;
      }, function (error) {

        console.error(error);
    });


	
 }
 
 
 //show more functionality
			var pagesShown = 1;
		    var pageSize = 3;
		    
		    $scope.paginationLimit = function(data) {
		        return pageSize * pagesShown;
		    };
		    $scope.hasMoreItemsToShow = function() {
		        return pagesShown < ($scope.datalists.length / pageSize);
		    };
		    $scope.showMoreItems = function() {
		        pagesShown = pagesShown + 1;       
		    };	
     
 

}