module.exports = function(grunt) {
    'use strict';
    
    var tag = grunt.option('tag');

    // If tag is not defined, use the current tag (found in package.json)
    if (!tag) {
        tag = grunt.file.readJSON('package.json').version;
    }

    // -- Plugins --------------------------------------------------------------

    // Intelligently autoloads `grunt-*` plugins from the package dependencies.
    require('load-grunt-tasks')(grunt);

    // -- Configuration --------------------------------------------------------

    grunt.initConfig({

        // Watch for file changes
        watch: {
            scripts: {
                files: [
                    'jquery.pointerHooks.js',
                    'Gruntfile.js'
                ],
                tasks: ['build']
            }
        },

        // Compress plugin
        uglify: {
            minify: {
                files: {
                    'jquery.pointerHooks.min.js': ['jquery.pointerHooks.js']
                }
            }
        }

    });

    // -- Tasks ----------------------------------------------------------------

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['uglify']);

};
