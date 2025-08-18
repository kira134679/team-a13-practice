/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'rule-empty-line-before': ['always', { except: ['after-rule'] }],
  },
};
