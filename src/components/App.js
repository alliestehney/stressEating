import React, { Component } from 'react';
import DietaryPref from './DietaryPref';
import StressLevel from './StressLevel';
import Recipe from "./Recipes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <DietaryPref/>
        <StressLevel onClick={() => this.props.showDietaryForm}/>
      	<Recipe />
      </div>
    );
  }
}

export default App;
