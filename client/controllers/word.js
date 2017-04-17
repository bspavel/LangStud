'use strict';
yii2AngApp_word.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/word/index', {
            templateUrl: 'views/word/index.html',
            controller: 'index'
        })
        .when('/word/create', {
            templateUrl: 'views/word/create.html',
            controller: 'create',
            resolve: {
                word: function(services, $route){
                    return services.getWords();
                }
            }
        })
        .when('/word/update/:wordId', {
            templateUrl: 'views/word/update.html',
            controller: 'update',
            resolve: {
                word: function(services, $route){
                    var wordId = $route.current.params.wordId;
                    return services.getWord(wordId);
                }
            }
        })
        .when('/word/delete/:wordId', {
            templateUrl: 'views/word/index.html',
            controller: 'delete',
        })
        .otherwise({
            redirectTo: '/word/index'
        });
}]);

yii2AngApp_word.controller('index', ['$scope', '$http', 'services',
    function($scope,$http,services) {
        $scope.message = 'Everyone come and see how good I look!';
        services.getWords().then(function(data){
            $scope.words = data.data;
        });
        $scope.deleteWord = function(wordID) {
            if(confirm("Are you sure to delete word number: " + wordID)==true && wordID>0){
                services.deleteWord(wordID);
                $route.reload();
            }
        };
    }])
    .controller('create', ['$scope', '$http', 'services','$location','word',
        function($scope,$http,services,$location,word) {
            $scope.message = 'Look! I am an about page.';
            $scope.createWord = function(word) {
                var results = services.createWord(word);
            }
        }])
    .controller('update', ['$scope', '$http', '$routeParams', 'services','$location','word',
        function($scope,$http,$routeParams,services,$location,word) {
            $scope.message = 'Contact us! JK. This is just a demo.';
            var original = word.data;
            $scope.word = angular.copy(original);
            $scope.isClean = function() {
                return angular.equals(original, $scope.word);
            }
            $scope.updateWord = function(word) {
                var results = services.updateWord(word);
            }
        }]);