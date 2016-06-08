module.exports = function(grunt) {

    //var phantom = require('./tasks/phantomas');
    grunt.task.registerTask('webPerformanceMatrix', function() {
        var phantomasConfig = {};
        var options = this.options({});
        options.urls.forEach(function(url) {
            var runConfig = {
                options: {
                    indexPath: options.resultsFolder + "/" + url.replace(/[,<>=?|*:./"%]/g, '_') + "/",
                    url: url
                }
            }
            phantomasConfig[url.replace(/[,<>=?|*:./"%]/g, '_')] = runConfig;
        });
        grunt.config.set('phantomas', phantomasConfig);
        grunt.task.run('phantomas');
    });
};
