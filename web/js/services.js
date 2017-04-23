'use strict';

var app = angular.module('app');

app.service('LeaseService', function($http) {
    this.get = function() {
        return $http.get('/api/lang');
    };
    this.post = function (data) {
        return $http.post('/api/lang', data);
    };
    this.put = function (id, data) {
        return $http.put('/api/lang/' + id, data);
    };
    this.delete = function (id) {
        return $http.delete('/api/lang/' + id);
    };
});