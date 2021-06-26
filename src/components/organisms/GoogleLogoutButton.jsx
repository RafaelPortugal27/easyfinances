import React from 'react';
import getConfig from 'next/config';
import { GoogleLogout } from 'react-google-login';

const { publicRuntimeConfig: { GOOGLE_CLIENT_ID } } = getConfig();

export default function GoogleLogoutButton() {
  const responseGoogleSuccess = (response) => {
    console.log('GOOGLE_CLIENT_ID', GOOGLE_CLIENT_ID);
    console.log('Success Logout: ', response);
    alert('Logout made successfully!!');
  };

  return (
    <GoogleLogout
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={responseGoogleSuccess}
    />
  );
}
