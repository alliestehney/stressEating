import React, { Component } from 'react';
import DietaryPref from './DietaryPref';
import StressLevel from './StressLevel';
// import Recipe from "./Recipes";
// import WatchForScroll from "./ScrollActions";
import { connect } from 'react-redux';
import { showDietaryForm } from '../actions';
import RecipesList from "./RecipesList";
import { receiveRecipes } from "../actions";

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
          <RecipesList recipes={this.props.loading} stressLevel={this.props.stressLevel} />
      );

   }
}
}

const mapActionsToProps = {
  showDietaryForm,
  receiveRecipes
}


function mapStateToProps(state) {
return {
  recipes: state.recipes,
  loading: state.loading,
  currentComponent: state.currentComponent,
  dietaryRestrictions: state.dietaryRestrictions
  }
}
  export default connect(mapStateToProps,mapActionsToProps)(App);
