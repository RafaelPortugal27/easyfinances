import React from 'react';
import { GoogleLogin } from 'react-google-login';

export default function GoogleLoginButton() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="426167753970-lcgqunhceq7k8s85fhvmeepsdber21ia.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  );
}
