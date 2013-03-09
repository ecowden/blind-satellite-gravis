module.exports = {
    'js': {
        'internal': [
            'public/js/**/*.js'
        ],
        'external': [
            'components/angular/angular.js',
            'components/bootstrap-font-awesome/js/bootstrap.js'
        ],
        'test': [
            'components/angular-mocks/angular-mocks.js',
            'components/jquery/jquery.js'
        ]
    },

    'less': {
        'internal': ['public/style/**/*.less'],
        'external': ['components/bootstrap-font-awesome/less/*.less']
    }
};