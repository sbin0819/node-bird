import React from 'react';
import PropTypes from 'prop-types';
import HEAD from 'next/head'
import 'antd/dist/antd.css';

const App = ({ Component }) => {
    return (
        <>
            <HEAD>
                <meta charSet='utf-8' />
                <title>NodeBird</title>
            </HEAD>
            <Component />
        </>
    )
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default App;