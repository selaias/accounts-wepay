Accounts.oauth.registerService('wePay');
if (Meteor.isClient) {
  Meteor.loginWithWePay = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    WePay.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.wePay'],
    forOtherUsers: ['services.wePay.id']
  });
}