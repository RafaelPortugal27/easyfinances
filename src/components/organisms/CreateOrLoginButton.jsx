import React from 'react';
import Button from '../atoms/Button';

export default function CreateOrLoginButton() {
  const handleLogin = () => {
    console.log('login via google');
  };

  return (
    <Button onClick={handleLogin}>Login via google</Button>
  );
}
