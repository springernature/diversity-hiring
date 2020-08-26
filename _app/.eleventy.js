module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection('readme', collection => {
        return collection.getAllSorted().map(item => {
            if (item.fileSlug === 'README') {
                item.outputPath = item.outputPath.replace('/README', '');
            }
        });
    });

    return {
        dir: {
            input: "../",
            output: "dist"
        }
    }
  };