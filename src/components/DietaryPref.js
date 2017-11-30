import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveRecipes } from '../actions';
import { showRecipes } from '../actions';
import { fetchRecipes } from '../actions';



class DietaryPref extends Component{
  constructor(props){
    super(props);
    this.state = {
      vegan: false,
      vegetarian: false,
      peanutfree: false,
      treenutfree: false,
      lowcarb: false,
      highprotein: false
    };
  }

render() {
  return(
    <form className = "DietaryPref" onSubmit={this.handleSubmit.bind(this)}>
      <h2>Dietary Preferences</h2>
      <label className="Dietary__label"></label>
      <p>
        <label><input type="checkbox" name="vegan" checked={this.state.vegan} onChange={this.handleInputChange.bind(this)}/> Vegan </label>
        <label><input type="checkbox" name="vegetarian" checked={this.state.vegetarian} onChange={this.handleInputChange.bind(this)}/> Vegatarian </label>
        <label><input type="checkbox" name="peanutfree" checked={this.state.peanutfree} onChange={this.handleInputChange.bind(this)}/> Peanut-Free </label>
        <label><input type="checkbox" name="treenutfree" checked={this.state.treenutfree} onChange={this.handleInputChange.bind(this)}/> Tree-Nut-Free </label>
        <label><input type="checkbox" name="lowcarb" checked={this.state.lowcarb} onChange={this.handleInputChange.bind(this)}/> Low carb </label>
        <label><input type="checkbox" name="highprotein" checked={this.state.highprotein} onChange={this.handleInputChange.bind(this)}/> High Protein </label>
     </p>

      <button className= "Submit" type="submit"> Submit</button>

    </form>
  );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

    // handleSubmit(event) {
    //   this.setState({
    //
    //   });
    // }


    handleSubmit(event) {
      event.preventDefault();
      var newRestrictions = [];

      if(this.state.vegan === true){
        newRestrictions.push("vegan");

      }
      if(this.state.vegetarian === true){
        newRestrictions.push("vegetarian");

      }
      if(this.state.peanutfree === true){
        newRestrictions.push("peanutfree");
      }
       if(this.state.treenutfree === true){
        newRestrictions.push("treenutfree");
      }
       if(this.state.lowcarb === true){
        newRestrictions.push("lowcarb");
      }
       if(this.state.highprotein === true){
        newRestrictions.push("highprotein");
      }

      console.log(newRestrictions);
      this.props.onSubmit({
        dietaryRestrictions: newRestrictions

      });
    }

}
const mapActionsToProps = {
onSubmit: fetchRecipes
}

export default connect (null, mapActionsToProps)(DietaryPref);
