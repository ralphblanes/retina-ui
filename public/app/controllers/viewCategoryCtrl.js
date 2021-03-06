angular.module('myapp')
    .controller('viewCategoryCtrl', ['$scope', 'ArticleFactory', viewCategoryCtrl]);

function viewCategoryCtrl($scope, ArticleFactory) {
    $scope.page = 1;
    ArticleFactory.getLatestArticles($scope.page).success(function(articles, status) {
        $scope.news = articles;
    });

    $scope.loadCategory = function(categoryName) {
        if (categoryName !== "all") {
            ArticleFactory.getArticlesByCategory(categoryName)
            .success(function(articles, status) {
                $scope.news = articles;
            });
        }
        else {
            ArticleFactory.getLatestArticles($scope.page).success(function(articles, status){
                $scope.news = articles;
            });
        }
    };

    $scope.stripHTML = function(articleSummary) {
        return articleSummary.replace(/<(?:.|\n)*?>/gm, '');
    };
}