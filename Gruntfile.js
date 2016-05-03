module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      dist: ['dist/*']
    },
    mkdir: {
      all: {
        options: {
          create: ['dist/logo']
        },
      },
    },
    copy: {
      logo: {
        expand: false,
        src: 'img/logo/udacitylogo.png',
        dest: 'dist/udacitylogo.png',
      },
    },
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
        engine: 'gm', //gm | im
        sizes: [{
          name: 'small',
          width: 200,
          quality: 80
            // height: 240
        }, {
          name: 'medium',
          width: 350,
          quality: 80
        }, {
          name: 'large',
          width: 450,
          quality: 80
        }],
        files: [{
          expand: true,
          src: ['**/*.{jpg,gif,png,jpeg,JPG}'],
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

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //
  // has all tasks: grunt.registerTask('default', ['clean','mkdir',concat','uglify','responsive_images']);
  grunt.registerTask('clean-up', ['clean']);
  grunt.registerTask('make-logo-dir', ['mkdir']);
  grunt.registerTask('copy-logo', ['copy']);
  grunt.registerTask('responsive-pix', ['responsive_images']);
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'concat', 'uglify', 'responsive_images']);


  // What to install
  // npm install grunt-contrib-clean --save-dev
  // npm install grunt-mkdir --save-dev
  // npm install grunt-contrib-copy --save-dev
  // npm install grunt-responsive-images --save-dev
  // npm install grunt-contrib-uglify --save-dev
};
