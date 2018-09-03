import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import './style/index.css';
import Body from './body';

class FoodPicker extends React.Component {
  render() {
    return(
      <div>
        <h1 className="pageTitle">Meal Seeker</h1>
        <Body/>
      </div>
    )
  }
}

WebFont.load({
  google: {
    families: ['Maven Pro:400', 'sans-serif']
  }
});

ReactDOM.render( <FoodPicker/>, document.getElementById('root') );