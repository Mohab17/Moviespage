function movies ($http){
	var URL = "http://api-nghyf.rhcloud.com/films";
	this.getMovies = function () {
		
		return $http.get (URL);
	};
	
}