var movieApp = angular.module('movieApp', []);
movieApp.controller('movieController', function($scope, $http){
var apiKey='?api_key=fec8b5ab27b292a68294261bb21b04a5';


 $scope.searchedTitle=function(){


	
    var movieURL = 'https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';
    var keywordURL= 'http://api.themoviedb.org/3/search/multi?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';
    var genreURL='http://api.themoviedb.org/3/genre/movie/list?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';

   

    var movieName="";
     movieName=$scope.search;
    console.log(movieName);
    $scope.imagePath='http://image.tmdb.org/t/p/w300/';
    // $scope.imagePath='http://image.tmdb.org/t/p/w/';


    $http({
        method: 'GET',
        url: keywordURL+movieName,
    }).then(function successFunction(movieData){
    	console.log(movieData);
    	for(var i = 0; i<movieData.data.results.length; i++){
    		if(movieData.data.results[i].media_type == 'person'){
	    		movieData.data.results[i].itemImage = movieData.data.results[i].profile_path;
    		}else{
    			movieData.data.results[i].itemImage = movieData.data.results[i].poster_path;
    		}
    	}

console.log(movieData);
            $scope.movieArray = movieData.data.results;
    }, function failureFunction(movieData){

    }
    );
} //END OF KEYWORD


$scope.displayOutNow=function(){

    var nowPlaying='http://api.themoviedb.org/3/movie/now_playing'+apiKey;
  
    $scope.imagePath='http://image.tmdb.org/t/p/w300/';
    // $scope.imagePath='http://image.tmdb.org/t/p/w/';


    $http({
        method: 'GET',
        url: nowPlaying,
    }).then(function successFunction(movieData){
    	console.log(movieData);
    	
        $scope.movieArray = movieData.data.results;
        for(var i = 0; i<movieData.data.results.length; i++){
        movieData.data.results[i].itemImage = movieData.data.results[i].poster_path;
       }
    }, function failureFunction(movieData){

    }
    );
} //END OF NOW PLAYING



$scope.searchPerson=function(){

  var personURL='http://api.themoviedb.org/3/search/person?api_key=fec8b5ab27b292a68294261bb21b04a5&query=';
   	 var movieName="";
     movieName=$scope.search;
    $scope.imagePath='http://image.tmdb.org/t/p/w300/';
    // $scope.imagePath='http://image.tmdb.org/t/p/w/';


    $http({
        method: 'GET',
        url: personURL+movieName,
    }).then(function successFunction(movieData){
    	console.log(movieData);
    	
        $scope.movieArray = movieData.data.results;
        for(var i = 0; i<movieData.data.results.length; i++){
        movieData.data.results[i].itemImage = movieData.data.results[i].profile_path;
       }
    }, function failureFunction(movieData){

    }
    );
} //END OF PERSON SEARCH


$scope.displayHighestRated=function(){

  var topRated='http://api.themoviedb.org/3/movie/top_rated`'+apiKey;
    $scope.imagePath='http://image.tmdb.org/t/p/w300/';
    // $scope.imagePath='http://image.tmdb.org/t/p/w/';


    $http({
        method: 'GET',
        url: topRated,
    }).then(function successFunction(movieData){
    	console.log(movieData);
    	
        $scope.movieArray = movieData.data.results;
        for(var i = 0; i<movieData.data.results.length; i++){
        movieData.data.results[i].itemImage = movieData.data.results[i].poster_path;
       }
    }, function failureFunction(movieData){

    }
    );
} //END OF HIGHEST RATED`


// $http({

// 	method:'GET',
// 	url:movieURL+movieName,
	
// }).then(function successFunction(movieData){
// 		$scope.movieArray=movieData.data.results;
// 	},function failureFunction(movieData){



// });



});



 //end of get keyword