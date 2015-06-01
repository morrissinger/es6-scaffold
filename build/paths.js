var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
    source: appRoot + '**/*.js',
    html: appRoot + '**/*.html',
    style: 'styles/**/*.scss',
    output: outputRoot,
    sourceMapRelativePath: '../' + appRoot
};