import React from 'react';
import { GoogleLogin } from 'react-google-login';

export default function GoogleLoginButton() {
  const responseGoogleSuccess = (response) => {
    console.log('Success: ', response);
  };
  const responseGoogleFailure = (response) => {
    console.log('Failure: ', response);
  };

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFailure}
      cookiePolicy="single_host_origin"
    />
  );
}
