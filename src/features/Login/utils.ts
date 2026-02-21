import { GoogleSignin } from '@react-native-google-signin/google-signin';

const CLIENT_ID =
  '159007714113-l1nka853t90rqrej8eu4h1sc0lg2kjiv.apps.googleusercontent.com';
const IOS_CLIENT_ID =
  '159007714113-tt0ntg122ok4961rtf2r79kqs9nto41m.apps.googleusercontent.com';
export const signInWithGoogle = async () => {
  GoogleSignin.configure({
    webClientId: CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
  });
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo.data?.idToken);

    const { idToken } = await GoogleSignin.getTokens();

    return idToken;
  } catch (error) {
    console.error('Google Sign-In error:', error);
  }
};
