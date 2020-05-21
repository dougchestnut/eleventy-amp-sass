const CleanCSS = require("clean-css");
var sass = require("node-sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("sass", function(sas) {
    return sass.renderSync({file:sas}).css;
  });
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
  eleventyConfig.addFilter("stripimportant", function(css){
    css = css+'';
    return css.split("!important").join();
  });
};
