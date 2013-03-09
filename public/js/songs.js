(function (angular) {
    "use strict";

    var ngModule = angular.module('blind-satellite.songs', []);

    ngModule.constant("songs", [
        {
            title: "Nothing's Free",
            audioUrl: "http://cdn.blindsatellite.com/music/Nothing%27s%20Free.mp3"
        },
        {
            title: "Polly Amry",
            audioUrl: "http://cdn.blindsatellite.com/music/Polly%20Amry.mp3"
        },
        {
            title: "Digging to China",
            audioUrl: "http://cdn.blindsatellite.com/music/Digging%20to%20China.mp3"
        },
        {
            title: "Take a Look",
            audioUrl: "http://cdn.blindsatellite.com/music/Take%20a%20Look.mp3"
        },
        {
            title: "Where's the Beer?",
            audioUrl: "http://cdn.blindsatellite.com/music/Where%27s%20the%20Beer.mp3"
        }
    ]);

}(window.angular));

//[
//    new Song({
//        imageUrl: "img/nightTrees120x200.png",
//        audioUrl: "http://cdn.blindsatellite.com/music/Nothing%27s%20Free.mp3"
//    }),
//    new Song({
//        title: "Polly Amry",
//        imageUrl: "img/ballons120x200.png",
//        audioUrl: "http://cdn.blindsatellite.com/music/Polly%20Amry.mp3"
//    }),
//    new Song({
//        title: "Digging to China",
//        imageUrl: "img/silhouette120x200.png",
//        audioUrl: "http://cdn.blindsatellite.com/music/Digging%20to%20China.mp3"
//    }),
//    new Song({
//        title: "Take a Look",
//        imageUrl: "img/sunset120x200.png",
//        audioUrl: "http://cdn.blindsatellite.com/music/Take%20a%20Look.mp3"
//    }),
//    new Song({
//        title: "Where's the Beer?",
//        imageUrl: "img/snowBeer120x200.png",
//        audioUrl: "http://cdn.blindsatellite.com/music/Where%27s%20the%20Beer.mp3"
//    })
//];