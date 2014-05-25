'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    livereload: true,
                    hostname:   'localhost',
                    port:       1234
                }
            }
        },

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    imagePath:   'images/'
                },

                files: {
                    'assets/stylesheets/application.css': 'assets/stylesheets/application.scss'
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },

            dist: {
                src: ['assets/javascripts/vendor/jquery.js', 'assets/javascripts/main.js'],
                dest: 'assets/javascripts/application.js',
            }
        },

        jshint: {
            beforeconcat: ['assets/javascripts/main.js']
        },

        uglify: {
            prod: {
                my_target: {
                    files: {
                        'assets/javascripts/app.min.js': ['assets/javascripts/application.js']
                    }
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },

            html: {
                files: ['**/*.html'],
                tasks: []
            },

            js: {
                files: ['assets/javascripts/main.js'],
                tasks: ['jshint', 'concat']
            },

            sass: {
                options: {
                    livereload: false
                },

                files: ['assets/stylesheets/**/*.scss'],
                tasks: ['sass']
            },

            css: {
                files: ['assets/stylesheets/application.css'],
                tasks: []
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', [
        'connect:server',
        'watch'
    ]);

    grunt.registerTask('production', ['uglify:prod']);
};