import React, { Component } from 'react';
import DietaryPref from './DietaryPref';
import StressLevel from './StressLevel';
import Recipe from "./Recipes";
import { connect } from 'react-redux';

class App extends Component {
  render() {

    if (this.props.currentComponent === "stress_form") {
      return (
        <StressLevel />
      );
    } else if(this.props.currentComponent === "dietary_restrictions"){
     return(<DietaryPref/>
     );
   } else {
     return(<Recipe/>
     );
    }

  //   return (
  //     <div className="App">
  //
  //
  //       <DietaryPref/>
  //       <StressLevel onClick={this.props.showDietaryForm}/>
  //     	<Recipe />
  //     </div>
  //   );
  // }
}
}

function mapStateToProps(state) {
  return {
    currentComponent: state.currentComponent
  }
}
export default connect(mapStateToProps)(App);
