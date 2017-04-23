'use strict';
yii2AngApp_word.factory("services", ['$http','$location','$route',
    function($http,$location,$route) {
        var obj = {};
        obj.getWords = function(){
            return $http.get(serviceBase + 'words');
        }
        obj.createWord = function (word) {
            return $http.post( serviceBase + 'words', word )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/word/index');
            }
            function errorHandler( result ){
                alert("Error data")
                $location.path('/word/create')
            }
        };
        obj.getWord = function(wordID){
            return $http.get(serviceBase + 'words/' + wordID);
        }

        obj.updateWord = function (word) {
            return $http.put(serviceBase + 'words/' + word.id, word )
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $location.path('/word/index');
            }
            function errorHandler( result ){
                alert("Error data")
                $location.path('/word/update/' + word.id)
            }
        };
        obj.deleteWord = function (wordID) {
            return $http.delete(serviceBase + 'words/' + wordID)
                .then( successHandler )
                .catch( errorHandler );
            function successHandler( result ) {
                $route.reload();
            }
            function errorHandler( result ){
                alert("Error data")
                $route.reload();
            }
        };
        return obj;
    }]);