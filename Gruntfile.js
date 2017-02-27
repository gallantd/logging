module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: [
					'lib/scripts/*.js'
				],
				tasks: ['uglify'],
				options: {
					spawn: false,
				},
			},
		},
		uglify: {
			build: {
				files: {
					'build/js/logging.min.js': ['lib/scripts/*.js']
				}
			}
		},
		jshint: {
			files: [
				'Gruntfile.js',
				'lib/scripts/*.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		clean: {
			build: {
				src: ['build/js/']
			}
		}
	});
;
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['jshint', 'clean', 'uglify']);
	grunt.registerTask('dev', ['jshint', 'clean', 'uglify', 'watch']);
};
