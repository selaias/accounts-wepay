Package.describe({
  name: 'selaias:accounts-wepay',
  version: '0.1.0',
  summary: 'Login service for WePay accounts',
  git: 'https://github.com/selaias/accounts-wepay.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.0.3.1');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  
  api.use('selaias:oauth-wepay@0.1.0', ['client', 'server']);

  api.addFiles("wepay.js");

});

