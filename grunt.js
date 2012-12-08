module.exports = function (grunt) {
    // import extra tasks
    grunt.loadNpmTasks('grunt-contrib-less');

    var jsFiles = ["src/*.js"];
    var lessFiles = ["style/*.less"];
    grunt.initConfig({
        lint: {
            all: jsFiles
        },
        concat: {
            "built/all.js": jsFiles,
            "built/thirdParty.js": [
                "components/angular-complete/angular.js",
                "components/angular-complete/angular-resource.js",
                "components/bootstrap/js/*.js"
            ]
        },
        min: {
            "built/app.min.js": "built/all.js",
            "built/thirdParty.min.js": "built/thirdParty.js"
        },
        less: {
            all: {
                options: {
                    compress: true
                },
                path: ["style", "components/bootstrap/less"],
                files: {
                    "built/app.min.css": "style/app.less"
                }
            }
        },
        watch: {
            all: { // use 'develop' task for extra efficiency
                files: [jsFiles, lessFiles],
                tasks: 'make-js make-style'
            },
            js: {
                files: jsFiles,
                tasks: 'make-js'
            },
            less: {
                files: lessFiles,
                tasks: 'make-style'
            }
        }
    });

    // Make resources
    grunt.registerTask('make-js', 'lint concat min');
    grunt.registerTask('make-style', 'less');
    grunt.registerTask('make-all', 'make-js make-style');
    grunt.registerTask('default', 'make-all');

    grunt.registerTask('bower-install')

    // Everything needed to go from a fresh checkout or from continuous integration
    grunt.registerTask('setup', 'bower:install make-all');

    // Playing around with lots of things at once  :-)
    grunt.registerTask('develop', 'Watch both JS and LESS files and do other fun develop-y stuff', function () {
        /*
         * THIS DOES NOT WORK!   (yet..muahahaha...)
         */
        grunt.task.run("make-all");
        var spawn = require('child_process').spawn,
            watchJs    = spawn('grunt', ['watch:js']);

        watchJs.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });

        watchJs.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });

        watchJs.on('exit', function (code) {
            console.log('child process exited with code ' + code);
        });
//        grunt.task.run("watch:js");
//        grunt.task.run("watch:style");
    });
};

//// Project configuration.
//grunt.initConfig({
//    // Project metadata, used by some directives, helpers and tasks.
//    meta: {},
//    // Lists of files to be concatenated, used by the "concat" task.
//    concat: {},
//    // Lists of files to be linted with JSHint, used by the "lint" task.
//    lint: {},
//    // Lists of files to be minified with UglifyJS, used by the "min" task.
//    min: {},
//    // Lists of files or URLs to be unit tested with QUnit, used by the "qunit" task.
//    qunit: {},
//    // Configuration options for the "server" task.
//    server: {},
//    // Lists of files to be unit tested with Nodeunit, used by the "test" task.
//    test: {},
//    // Configuration options for the "watch" task.
//    watch: {},
//    // Global configuration options for JSHint.
//    jshint: {},
//    // Global configuration options for UglifyJS.
//    uglify: {}
//});