/*
 * grunt-devperf
 * https://github.com/gaelmetais/grunt-devperf
 *
 * Copyright (c) 2014 Gaël Métais
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';
console.log("hello");
    // Project configuration.
    grunt.initConfig({

        webPerformanceMatrix: {
            options: {
                urls: ['https://www.google.com',
                    'http://www.facebook.com',
                    'http://www.yahoo.com'
                ],

                resultsFolder: './reports/',
            }
        }

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-phantomas');
    grunt.registerTask('default', ['webPerformanceMatrix']);

};
