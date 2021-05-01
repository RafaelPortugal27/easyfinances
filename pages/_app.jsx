import React from 'react';
import PropTypes from 'prop-types';
import '../src/styles/global.css';

// I don't now what type is pageProps, maibe object?
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
};

export default MyApp;
