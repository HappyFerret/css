const pascalCase = '([A-Z][a-zA-Z0-9]+)'; // PascalCase
// const kebabCase = '([a-z][a-z0-9]*(-[a-z0-9]+)*)'; // kebab-case
const camelCase = '([a-z0-9]+([A-Z][a-z0-9]+)*)'; // camelCase

module.exports = {
  plugins: [
    'stylelint-scss',
    'stylelint-order',
  ],
  rules: {
    // Base rules
    indentation: 2,
    'number-leading-zero': 'never',
    'string-quotes': 'double',
    'selector-max-id': 0,
    'selector-list-comma-newline-after': 'always',
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'] },
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] },
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-blacklist': { '/^border/': ['none'] },
    'at-rule-empty-line-before': [
      'always',
      { ignore: ['after-comment'], except: ['first-nested'] },
    ],
    'selector-class-pattern': [
      `^(?!js)(${pascalCase})` + // block
      `(__${camelCase})?` + // element
      `(--${camelCase})?$`, // modifier
      {
        resolveNestedSelectors: true,
        message: 'Expect class selector to conform to BEM ' +
          '(PascalCase for blocks, camelCase for element and modifiers)',
      },
    ],

    // Sass rules
    'max-nesting-depth': 2,
    'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
    'scss/at-extend-no-missing-placeholder': true,
    'order/order': [
      'declarations',
      { type: 'at-rule' },
      { type: 'at-rule', hasBlock: true },
      'rules',
    ],
  },
};
