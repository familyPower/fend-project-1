module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          upscale: 'true',
          engine: 'im',
          sizes: [{
            width: 1024px,
            suffix: '_large_1x',
            quality: 100
            }, {
              width: 512px,
              suffix: '_medium_1x',
              quality: 50
            }, {
              width: 240px,
              suffix: '_small_1x',
              quality: 50
            }]
          },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'imagesimg',
          dest: 'img/'
        }],
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);

};
===============================================================================
SAMPLE GRUNT FILE
===============================================================================
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};
