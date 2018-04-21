import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Buttons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      changeButtonColor: "rgb(170, 170, 170)"
    }
  }

  activateChangeButton = () => {
    let buttons = document.getElementsByTagName("BUTTON");
    this.setState({changeButtonColor: "rgb(170, 170, 170)"});
    for(let button of buttons) {
      if(button.style.color === "rgb(0, 200, 0)") {
        this.setState({changeButtonColor: "rgb(25, 186, 0)"})
      }
    }
  };

  render() {
    return(
      <RenderButtons activate={this.activateChangeButton} changeButton={this.state.changeButtonColor}/>
    )
  }
}

class RenderButtons extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "Less than 200": false,
      "200 - 500": false,
      "More than 500": false,
      "Salty": false,
      "Sweet": false,
      "Spicy": false,
      "Bitter": false,
      "Sour": false,
      "Less than 5": false,
      "5 - 15": false,
      "More than 15": false,
      "Easy": false,
      "Medium": false,
      "Hard": false,
      "Very hard": false,
      "Hot": false,
      "Cold": false,
      "High carb": false,
      "High fat": false,
      "High protein":false
    }
  }

  changeButtonsColor = (e) => {
    e.target.style.color = (e.target.style.color === "rgb(0, 200, 0)") ? "rgb(0, 0, 0)" : "rgb(0, 200, 0)";
    let answer = e.target.innerHTML.trim();
    this.setState((this.state[answer] === false) ? {[answer]: true} : {[answer]: false});
  };

  render() {
    return(
      <main className="container">
        <h2 className="PageTitle">Food Picker</h2>
        <div className="questions">
          <p>Calories / 100g</p>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Less than 200 </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > 200 - 500 </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > More than 500 </button>
          <p>Flavor</p>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Bitter </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Salty </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Sour </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Spicy </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Sweet </button>
          <p>Preparation time [mins]</p>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Less than 5</button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > 5 - 15 </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > More than 15 </button>
          <p>Difficulty level</p>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Easy </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Medium </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Hard </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Very hard </button>
          <p>Temperature</p>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Cold </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > Hot </button>
          <p>Macros</p>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > High carb </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > High fat </button>
          <button onClick={(e) => { this.changeButtonsColor(e); this.props.activate()} } > High protein </button>
        </div>
        <div className="meals">
          <p style=
               {{ display:
                   ((
                       this.state["200 - 500"] ||
                       this.state["Sweet"] ||
                       this.state["Less than 5"] ||
                       this.state["Easy"] ||
                       this.state["Cold"] ||
                       this.state["High carb"]
                     ) &&
                     !this.state["Less than 200"] &&
                     !this.state["More than 500"] &&
                     !this.state["Salty"] &&
                     !this.state["Bitter"] &&
                     !this.state["Sour"] &&
                     !this.state["Spicy"] &&
                     !this.state["5 - 15"] &&
                     !this.state["More than 15"] &&
                     !this.state["Medium"] &&
                     !this.state["Hard"] &&
                     !this.state["Very hard"] &&
                     !this.state["Hot"] &&
                     !this.state["High fat"] &&
                     !this.state["High protein"]
                   ) ? "block" : "none"
               }}>Breakfast cereals
          </p>

          <p style=
               {{ display:
                   ((
                       this.state["200 - 500"] ||
                       this.state["Sweet"] ||
                       this.state["More than 15"] ||
                       this.state["Medium"] ||
                       this.state["Cold"] ||
                       this.state["High carb"] ||
                       this.state["High fat"]
                     ) &&
                     !this.state["Less than 200"] &&
                     !this.state["More than 500"] &&
                     !this.state["Salty"] &&
                     !this.state["Bitter"] &&
                     !this.state["Sour"] &&
                     !this.state["Spicy"] &&
                     !this.state["Less than 5"] &&
                     !this.state["5 - 15"] &&
                     !this.state["Easy"] &&
                     !this.state["Hard"] &&
                     !this.state["Very hard"] &&
                     !this.state["Hot"] &&
                     !this.state["High protein"]
                   ) ? "block" : "none"
               }}>Cheesecake
          </p>

          <p style=
               {{ display:
                   ((
                       this.state["200 - 500"] ||
                       this.state["Sweet"] ||
                       this.state["5 - 15"] ||
                       this.state["Medium"] ||
                       this.state["Hot"] ||
                       this.state["High carb"] ||
                       this.state["High fat"]
                     ) &&
                     !this.state["Less than 200"] &&
                     !this.state["More than 500"] &&
                     !this.state["Bitter"] &&
                     !this.state["Salty"] &&
                     !this.state["Sour"] &&
                     !this.state["Spicy"] &&
                     !this.state["Less than 5"] &&
                     !this.state["More than 15"] &&
                     !this.state["Easy"] &&
                     !this.state["Hard"] &&
                     !this.state["Very hard"] &&
                     !this.state["Cold"] &&
                     !this.state["High protein"]
                   ) ? "block" : "none"
               }}>Pancakes
          </p>

          <p style=
               {{ display:
                   ((
                       this.state["Less than 200"] ||
                       this.state["Salty"] ||
                       this.state["More than 15"] ||
                       this.state["Medium"] ||
                       this.state["Hot"] ||
                       this.state["High carb"]
                     ) &&
                     !this.state["200 - 500"] &&
                     !this.state["More than 500"] &&
                     !this.state["Bitter"] &&
                     !this.state["Sour"] &&
                     !this.state["Spicy"] &&
                     !this.state["Sweet"] &&
                     !this.state["Less than 5"] &&
                     !this.state["5 - 15"] &&
                     !this.state["Easy"] &&
                     !this.state["Hard"] &&
                     !this.state["Very hard"] &&
                     !this.state["Cold"] &&
                     !this.state["High fat"] &&
                     !this.state["High protein"]
                   ) ? "block" : "none"
               }}>Spaghetti
          </p>
        </div>
        <div className="chooseButton" style={{backgroundColor: this.props.changeButton}}>
          <button style={{color: this.props.changeButton}}>Choose</button>
        </div>
      </main>
    )
  }
}

ReactDOM.render(
  <Buttons/>,
  document.getElementById('root')
);