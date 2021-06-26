import React from 'react';
import GoogleLoginButton from '../src/components/organisms/GoogleLoginButton';
import GoogleLogoutButton from '../src/components/organisms/GoogleLogoutButton';

const Home = () => (
  <section>
    <h1>Hello World</h1>
    <br />
    <GoogleLoginButton />
    <br />
    <GoogleLogoutButton />
  </section>
);

export default Home;
