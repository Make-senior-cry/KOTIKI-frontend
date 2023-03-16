
const disableA11yRules = Object
    .keys(require('eslint-plugin-jsx-a11y').rules)
    .reduce((acc, rule) => { 
        acc[`jsx-a11y/${rule}`] = 'off'; 
        return acc 
    }, {});

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "overrides": [
        {
            "files": ["*.jsx", "*.js"]
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-shadow": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "react/react-in-jsx-scope": ["off"],
        "linebreak-style": ['off'],
        "react/prop-types": ['off'],
        ...disableA11yRules
    }
}
