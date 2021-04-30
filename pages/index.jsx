import React from 'react';
import CreateOrLoginButton from '../src/components/organisms/CreateOrLoginButton';
import GoogleLoginButton from '../src/components/organisms/GoogleLoginButton';

const Home = () => (
  <section>
    <h1>Hello World</h1>
    <CreateOrLoginButton />
    <br />
    <GoogleLoginButton />
  </section>
);

export default Home;
