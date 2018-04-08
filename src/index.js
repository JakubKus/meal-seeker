import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Buttons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: "rgb(170, 170, 170)"
    }
  }

  activateChangeButton = () => {
    let buttons = document.getElementsByTagName("BUTTON");
    this.setState({active: "rgb(170, 170, 170)"});
    for(let button of buttons) {
      if(button.style.color === "rgb(0, 255, 0)") {
        this.setState({active: "rgb(0, 0, 0)"})
      }
    }
  };

  render() {
    return(
      <RenderButtons activate={this.activateChangeButton} active={this.state.active}/>
    )
  }
}

class RenderButtons extends React.Component {

  changeButtonsColor = (e) => {
    e.target.style.color = (e.target.style.color === "rgb(0, 255, 0)") ? "rgb(0, 0, 0)" : "rgb(0, 255, 0)";
  };
  render() {
    return(
      <div className="container">
        <h2 className="PageTitle">Food Picker</h2>
        <p>Calories</p>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > &lt; 200</button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > 200 - 500 </button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > &gt; 500 </button>
        <p>Preparation time [mins]</p>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > &lt; 5</button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > 5 - 15 </button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > &gt; 15 </button>
        <p>Difficulty level</p>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Easy </button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Medium </button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Hard </button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Very hard </button>
        <p>Temperature</p>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Hot </button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Cold </button>
        <p>Macros</p>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > High carb </button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > High fat </button>
        <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > High protein </button>
        <button style={{color: this.props.active}}>Choose</button>
      </div>
    )
  }
}
ReactDOM.render(
  <Buttons/>,
  document.getElementById('root')
);