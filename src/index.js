import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './components/App/App';

WebFont.load({
  google: {
    families: ['Maven Pro:400', 'sans-serif']
  },
});

const googleAnalyticsId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
ReactGA.initialize(googleAnalyticsId);
ReactGA.pageview('/');

ReactDOM.render(<App />, document.getElementById('root'));
