module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	  connect: {
	    server: {
	      options: {
	        port: 9001,
	        base: 'src',
	        keepalive: true
	      }
	    }
	  },
	  ejs_static: {
	  	preview: {
	  		options: {
				dest: 'preview',
				path_to_data: 'src/data.json',
				path_to_layouts: 'src',
				index_page: 'index',
				parent_dirs: false,
				underscores_to_dashes: true,
				file_extension: '.html'
			}
	  	}
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-ejs-static');
};
