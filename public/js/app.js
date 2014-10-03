var app = angular.module("myapp",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'partials/index.html'
		})
		.state('feed', {
			url: '/feed',
			templateUrl: 'partials/feed.html'
		})
});

app.controller("stub",["$scope","$http",function($scope,$http){
	$http.get('/api/stub').success(function(data){
		$scope.news = data;
	});
}]);

app.controller("hn",["$scope","$http",function($scope,$http){
  $http.get('/api').success(function(data){
    $scope.news = data;
    $scope.show = function() {
      scope.news.show = true;
    }

  });
}]);
