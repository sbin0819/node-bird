import React from 'react';
import PropTypes from 'prop-types';
import HEAD from 'next/head';
import 'antd/dist/antd.css';

import withReduxSaga from 'next-redux-saga';

import wrapper from '../store/configureStore';

const App = ({ Component }) => {
  return (
    <>
      <HEAD>
        <meta charSet='utf-8' />
        <title>NodeBird</title>
      </HEAD>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
