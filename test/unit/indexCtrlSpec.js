(function () {
    "use strict";

    describe("indexCtrl", function () {

        beforeEach(module("blind-satellite.indexCtrl"));

        var instance,
            scope;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();

            instance = $controller("indexCtrl", {
                $scope: scope
            });
        }));

        it("should expose the songs on the $scope", inject(function (songs) {
            expect(scope.songs).toEqual(songs);
        }));

    });
}());
