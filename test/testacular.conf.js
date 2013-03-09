basePath = '../';

var project = require(__dirname + "/" + basePath + "project.js");

files = [
    JASMINE,
    JASMINE_ADAPTER
]
    .concat(project.js.external)
    .concat(project.js['external-test'])
    .concat(project.js.internal)
    .concat(project.js['internal-test']);

autoWatch = true;

browsers = ['Chrome'];

reporters = ['dots'];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
