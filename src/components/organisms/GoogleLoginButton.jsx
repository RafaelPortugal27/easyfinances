import React from 'react';
import getConfig from 'next/config';
import { GoogleLogin } from 'react-google-login';

const { publicRuntimeConfig: { GOOGLE_CLIENT_ID } } = getConfig();

export default function GoogleLoginButton() {
  const responseGoogleSuccess = (response) => {
    console.log('Success: ', response);
  };
  const responseGoogleFailure = (response) => {
    console.log('Failure: ', response);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFailure}
      cookiePolicy="single_host_origin"
    />
  );
}
