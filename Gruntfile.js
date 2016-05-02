module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    responsive_images: {
      dev: {
        engine: 'gm',   //gm | im
        sizes: [{
          name: 'small',
          width: 320,
          quality: 80
          // height: 240
        },{
          name: 'medium',
          width: 640,
          quality: 80
        },{
          name: "large",
          width: 1024,
          separator: "-",
          suffix: "_x2",
          quality: 60
        }],
        files: [{
          expand: true,
          src: ['**/*.{jpg,gif,png,jpg,jpeg}'],
          cwd: 'images/',
          dest: 'dist/'
        }]
      }
    },

    // qunit: {
    //   files: ['test/**/*.html']
    // },
    // jshint: {
    //   files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    //   options: {
    //     // options here to override JSHint defaults
    //     globals: {
    //       jQuery: true,
    //       console: true,
    //       module: true,
    //       document: true
    //     }
    //   }
    // },
    // watch: {
    //   files: ['<%= jshint.files %>'],
    //   tasks: ['jshint', 'qunit']
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-responsive-images');

  // grunt.registerTask('test', ['jshint', 'qunit']);
  //
  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('default', ['concat', 'uglify', 'responsive_images']);

};
