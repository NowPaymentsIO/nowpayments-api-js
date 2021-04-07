module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      dist: 'dist/**'
    },

    ts: {
      test: {
        options: {
          lib: [
            'es5',
            'es2015',
            'dom'
          ]
        },
        src: ['src/index.d.ts', 'src/index.ts']
      }
    },

    watch: {
      build: {
        files: ['src/*.ts'],
        tasks: ['build']
      }
    },

    webpack: require('./webpack.config.js')
  })

  grunt.registerTask('test', 'Run the jasmine and mocha tests', ['eslint', 'ts'])
  grunt.registerTask('build', 'Run webpack and bundle the source', ['clean', 'webpack'])
}
