"use strict";

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    jshint: {
      options: {
        // expected an assignment; triggered by cond assignments: foo || foo = bar
        '-W030': true,
        // expected an cond; triggered by assignment like this: if ( foo = bar.bool )
        '-W084': true,
        // confusing use of !
        '-W018': true
      },
      all: [
        'js/bj-lazy-load.js',
        'js/jquery.sonar.js'
      ]
    },
    uglify: {
      options: {
        report: 'gzip'
      },
      dist: {
        files: {
          'js/combined.min.js':
            ['js/jquery.sonar.js', 'js/bj-lazy-load.js']
        }
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'uglify'
  ]);
};
