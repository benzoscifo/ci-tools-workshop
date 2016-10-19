'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-scss-lint');

    grunt.initConfig({
        eslint: {
            options: {
                fix: true
            },
            target: [
                'Gruntfile.js',
                'src/**/*.js'
            ]
        },
        scsslint: {
            allFiles: [
                './src/**/*.scss'
            ],
            options: {
                config: '.scss-lint.yml',
                bundleExec: false
            }
        }
    });

    grunt.registerTask('test', ['scsslint', 'eslint']);
};
