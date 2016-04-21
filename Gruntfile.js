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
          cwd: 'img',
          dest: 'images/'
        }]
      }
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-responsive_images_extender');

  grunt.registerTask('default', ['responsive_images']);
  grunt.registerTask('default', ['responsive_images_extender']);

};
