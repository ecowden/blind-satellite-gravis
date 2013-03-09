module.exports = function (grunt) {
    // --- Import tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // --- Constants
    var project = require('./project.js'),
        jsFiles = project.js.internal.concat(project.js.external),
        lessFiles = project.less.internal.concat(project.less.external);

    // --- Grunt Tasks
    grunt.initConfig({
        concat: {
            "built/internal.js": project.js.internal,
            "built/external.js": project.js.external
        },
        copy: {
            all: {
                files: [
                    {
                        cwd: "components/wwt-bootstrap/font/",
                        src: ['**'],
                        dest: "public/built/font/",
                        expand: true
                    }
                ]
            }
        },
        less: {
            all: {
                options: {
                    compress: true
                },
                path: [
                    "public/style",
                    "components/bootstrap-font-awesome/less"
                ],
                files: {
                    "public/built/app.css": "public/style/app.less"
                }
            }
        },
        lint: {
            all: jsFiles
        },
        uglify: {
            "built/internal.js": "built/internal.js",
            "built/external.js": "built/external.js"
        },
        watch: {
            js: {
                files: jsFiles,
                tasks: 'concat'
            },
            less: {
                files: lessFiles,
                tasks: 'less'
            }
        }
    });

    // --- Composite Tasks
    grunt.registerTask('compile', ['copy', 'concat', 'less']);
    grunt.registerTask('package', ['compile', 'uglify']);
};