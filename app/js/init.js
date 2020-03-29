require('./settings.js').default;
require('./index-auth.js');
require('./i18next-config.js');
require('./mante.js');
require('./environment.js');
require('./base/custom.js');
require('./base/vendor.js');
require('./base/pages/home.js');

// require('./stats.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('LA skin initialized');
});
