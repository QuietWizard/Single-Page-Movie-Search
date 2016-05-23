// Initialize the application
var app = angular.module('app',[]);

// Controller for the Application
app.controller('movieSearchCtrl', function ($scope, $http) {
	var base = 'http://api.themoviedb.org/3/';
    var service = 'movie/popular';
    var apiKey = '42b3e60b6636f50062f6d3579100d83f';
    var callback = 'JSON_CALLBACK'; // provided by angular.js
    var url = base + service + '?api_key=' + apiKey + '&callback=' + callback;

    $http({method: 'JSONP', url: url}).success(function(data,status){
        $scope.movies = data.results;
        console.log($scope.movies);
    });

    $scope.search = function() {
        var service = 'search/movie';
        var query = $scope.query;
        var url = base + service + '?api_key=' + apiKey + '&query=' + query + '&callback=' + callback;
        $http({method: 'JSONP', url: url}).success(function(data,status){
            $scope.movies = data.results;
            console.log($scope.movies);
        });
    }


});