module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    env: {
        "browser": true
    },
    // check if imports actually resolve
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    'rules': {
        "no-console": ["error", {
            allow: ["warn", "error"]
        }],
        "no-param-reassign": 0,
        "indent": ["error", 4, {
            "MemberExpression": 1,
            "FunctionExpression": {
                "body": 1,
                "parameters": 3,
            }
        }],
        "camelcase": 0,
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
