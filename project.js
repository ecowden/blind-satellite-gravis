module.exports = {
    'js': {
        'internal': [
            'public/js/**/*.js'
        ],
        'external': [
            'components/angular/angular.js',
            'components/sugar/release/sugar.min.js'
        ],
        'internal-test': [
            'test/unit/**/*.js'
        ],
        'external-test': [
            'components/angular-mocks/angular-mocks.js'
        ]
    },

    'less': {
        'internal': ['public/style/**/*.less'],
        'external': ['components/bootstrap-font-awesome/less/*.less']
    }
};