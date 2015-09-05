module.exports = function(grunt) {

    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),

        /*============================================================
         Sass
         ============================================================*/
        sass: {
            dist: {
                files: {
                    'release/css/app.min.css': 'src/sass/app.scss'
                },
                options: {
                    style: 'compressed'
                }
            }
        },

        /*============================================================
         Scss lint
         ============================================================*/
        scsslint: {
            options: {
                exclude: 'src/sass/inuit/**/*',
                config: '.scss-lint.yml',
            },
            dist: {
                src: ['src/sass/**/*']
            }
        },

        /*============================================================
         Code Duplication
         ============================================================*/
        jscpd: {
            sass: {
                path: 'src/sass/**',
                exclude: 'src/sass/inuit/**'
            },
            js: {
                path: 'src/js/**',
                exclude: 'src/js/lib/**'
            }
        },

        /*============================================================
         JS hint
         ============================================================*/
        jshint: {
            all: ['Gruntfile.js', 'src/js/custom/**/*.js'],
        },

        /*============================================================
         Code Complexity
         ============================================================*/
        complexity: {
            generic: {
                src: ['src/js/custom/**/*.js'],
                options: {
                    breakOnErrors: true,
                    errorsOnly: false, // show only maintainability errors
                    cyclomatic: [6], // or optionally a single value, like 3
                    halstead: [20], // or optionally a single value, like
                    maintainability: 100,
                    hideComplexFunctions: false, // only display maintainability
                    broadcast: true // broadcast data over event-bus
                }
            }
        },

        /*============================================================
         Browserify
         ============================================================*/
        browserify: {
            dist: {
                files: {
                    'release/js/app.js': ['js/app.js'],
                    'release/js/lib.js': ['js/lib.js']
                }
            }
        },

        /*============================================================
         Uglify
         ============================================================*/
        uglify: {
            dest: {
                files: {
                    'release/js/app.min.js': ['release/js/app.js'],
                    'release/js/lib.min.js': ['release/js/lib.js']
                }
            }
        },

        /*============================================================
         Copy
         ============================================================*/
        copy: {
            fonts: {
                files: [
                  // makes all src relative to cwd
                  {expand: true, cwd: 'src/', src: ['fonts/**'], dest: 'release/'},
                ]
            },
            images: {
                files: [
                  {expand: true, cwd: 'src/', src: ['images/**'], dest: 'release/'},
                ]
            }
        },

        /*============================================================
         Watch
         ============================================================*/
        watch: {
            sass: {
                files: ['src/sass/**/*'],
                tasks: ['sass', 'scsslint'],
                options: {
                    livereload: true
                }
            },

            js: {
                files: ['src/js/**/*.js'],
                tasks: ['jshint', 'browserify', 'uglify'],
                options: {
                    livereload: true
                }
            },

            html : {
                files: ['*.html', '*.phtml'],
                options: {
                    livereload: true
                }
            }
        },

        /*============================================================
         Githooks
         ============================================================*/
        githooks: {
            all: {
                'pre-commit': 'sass scsslint jscpd jshint complexity'
            }
        }

    });

    // Loads the required plugins.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscpd');
    grunt.loadNpmTasks('grunt-complexity');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-githooks');

    // Default tasks.
    grunt.registerTask('default',   ['sass', 'browserify', 'uglify', 'copy']);
    grunt.registerTask('dev',       ['sass', 'browserify', 'uglify', 'copy', 'watch']);

    // Individual SASS && JS tasks.
    grunt.registerTask('scss',      ['sass', 'scsslint', 'jscpd:sass']);
    grunt.registerTask('js',        ['jshint', 'jscpd:js', 'complexity', 'browserify', 'uglify']);

    // Executes test tasks.
    grunt.registerTask('test',      ['scsslint', 'jshint', 'jscpd', 'complexity']);
    grunt.registerTask('testscss',  ['sass', 'scsslint', 'jscpd:sass']);
    grunt.registerTask('testjs',    ['jshint', 'jscpd:js', 'complexity']);
};