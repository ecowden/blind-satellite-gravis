(function (angular) {
    "use strict";

    describe("songs", function () {

        beforeEach(module("blind-satellite.songs"));

        it("should be an array", inject(function (songs) {
            expect(songs).toBeDefined();
            expect(angular.isArray(songs)).toBeTruthy();
        }));

        it("should have five songs", inject(function (songs) {
            expect(songs.length).toBe(5);
        }));

        it("each song should have a string 'title'", inject(function (songs) {
            songs.forEach(function (song) {
                expect(song.title).toBeDefined();
                expect(angular.isString(song.title)).toBeTruthy();
            });
        }));

        it("each song should have a string 'audioUrl'", inject(function (songs) {
            songs.forEach(function (song) {
                expect(song.title).toBeDefined();
                expect(angular.isString(song.audioUrl)).toBeTruthy();
            });
        }));

    });
}(window.angular));
