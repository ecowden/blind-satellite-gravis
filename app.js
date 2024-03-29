(function () {
    "use strict";

    var express = require('express'),
        connect = require('connect'),
        routes = require('./routes'),
        http = require('http'),
        path = require('path'),

        app = express();

    app.configure(function () {
        app.set('port', process.env.PORT || 3000);
        app.use(connect.responseTime());
        app.use(express.compress());
        app.use(express.favicon(__dirname + '/public/favicon.ico'));
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(app.router);
        app.use(express.static(path.join(__dirname, 'public')));
    });

    app.configure('development', function () {
        app.use(express.errorHandler());
    });

    app.get('/', routes.index);

    http.createServer(app).listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });
}());
