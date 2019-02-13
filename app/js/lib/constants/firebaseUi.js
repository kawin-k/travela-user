export const getUiConfig = firebase => ({
  // autoUpgradeAnonymousUsers: false,
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccess: () => false
  },
  // credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
  queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
  queryParameterForWidgetMode: 'mode',
  signInFlow: 'redirect',//'popup',
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
  ],
  // signInSuccessUrl: '',
  // tosUrl: () => {},
  // privacyPolicyUrl: '',
})