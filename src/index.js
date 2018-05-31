import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './body';

class FoodPicker extends React.Component {
  render() {
    return(
      <div>
        <h1 className="pageTitle">Food Picker</h1>
        <Body/>
      </div>
    )
  }
}

ReactDOM.render( <FoodPicker/>, document.getElementById('root') );