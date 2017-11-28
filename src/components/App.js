import React, { Component } from 'react';
import DietaryPref from './DietaryPref';
import StressLevel from './StressLevel';
import Recipe from "./Recipes";
import { connect } from 'react-redux';
import { showDietaryForm } from '../actions';
import RecipesList from "./RecipesList";

class App extends Component {
  render() {

    if (this.props.currentComponent === "stress_form") {
      return (
        <StressLevel onClick= {this.props.showDietaryForm}/>
      );
    } else if(this.props.currentComponent === "dietary_restrictions"){
        return (
          <DietaryPref />
        );
    } else {
        return(
          <RecipesList recipes={this.props.recipes}/>
      );

   }
}
}

const mapActionsToProps = {
  showDietaryForm
}


function mapStateToProps(state) {
return {
  recipes: state.recipes,
    currentComponent: state.currentComponent
  }
}
  export default connect(mapStateToProps,mapActionsToProps)(App);
