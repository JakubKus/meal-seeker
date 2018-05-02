import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './body';
import './index.css';

class FoodPicker extends React.Component {
  render() {
    return(
      <main className="container">
        <h2 className="pageTitle">Food Picker</h2>
        <Body/>
      </main>
    )
  }
}

ReactDOM.render( <FoodPicker/>, document.getElementById('root') );