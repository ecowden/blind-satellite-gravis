        console.log("controller executed");
(function (angular) {
    "use strict";

    var ngModule = angular.module('blind-satellite.indexCtrl', [
        'blind-satellite.songs'
    ]);

    ngModule.controller('indexCtrl', [
        '$scope', 'songs',
        function indexCtrl($scope, songs) {
            $scope.songs = songs;
        }
    ]);

}(window.angular));