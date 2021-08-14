import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import GoogleLoginButton from '../src/components/organisms/GoogleLoginButton';
import GoogleLogoutButton from '../src/components/organisms/GoogleLogoutButton';

const Home = () => {
  const [session] = useSession(); // const [ session, loading ] = useSession()
  if (!session) {
    return (
      <section>
        <h1>Hello, please login</h1>
        <br />
        <button onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000' })} type="button">
          Sign in
        </button>
        <GoogleLoginButton />
      </section>
    );
  }

  return (
    <section>
      <h1>
        Signed in as
        {' '}
        {session.user.email}
      </h1>
      <br />
      <button onClick={() => signOut} type="button">
        Sign in
      </button>
      <GoogleLogoutButton />
    </section>
  );
};

export default Home;
