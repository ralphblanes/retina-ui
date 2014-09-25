var app = angular.module("myapp",['ui.router']);

	app.config(function($stateProvider, $urlRouterProvider) {
	    
	    $urlRouterProvider.otherwise('/home');
	    
	    $stateProvider
	        .state('home', {
	            url: '/home',
	            templateUrl: 'partials/index.html'
	        })
	        .state('feed', {
	            url: '/feed',
	            templateUrl: 'partials/feed.html'
	        });
	        
	});

    // app.controller("hn",["$scope","$http",function($scope,$http){
    // 	$http.get('/api').success(function(data){
    // 		$scope.news = data;
    // 	});
    // }]);
