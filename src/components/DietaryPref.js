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
      glutenfree: false,
      nutfree: false,
      dairyfree: false,
      none: false
    };
  }

render() {
  return(
    <form className = "DietaryPref" onSubmit={this.handleSubmit.bind(this)}>
      <h2>Dietary Preferences</h2>
      <label className="Dietary__label">Dietary Preferences</label>
      <p>
        <label><input type="checkbox" name="vegan" checked={this.state.vegan} onChange={this.handleInputChange.bind(this)}/> Vegan </label>
        <label><input type="checkbox" name="vegetarian" checked={this.state.vegetarian} onChange={this.handleInputChange.bind(this)}/> Vegatarian </label>
        <label><input type="checkbox" name="glutenfree" checked={this.state.glutenfree} onChange={this.handleInputChange.bind(this)}/> Gluten-Free </label>
        <label><input type="checkbox" name="nutfree" checked={this.state.nutfree} onChange={this.handleInputChange.bind(this)}/> Nut-Free </label>
        <label><input type="checkbox" name="dairyfree" checked={this.state.dairyfree} onChange={this.handleInputChange.bind(this)}/> Dairy-Free </label>
        <label><input type="checkbox" name="none" checked={this.state.none} onChange={this.handleInputChange.bind(this)}/> None </label>
     </p>

      <button type="submit"> Submit</button>

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

    handleSubmit(event) {
      this.setState({

      });
    }
    // onSubmit(event){
    //   event.preventDefault();

    // const submission = {
    //   VeganSelected:this.state.VeganSelected,
    //   VegatarianSelected:this.state.VegatarianSelected,
    //   GlutenSelected:this.state.GlutenSelected,
    //   NutSelected:this.state.NutSelected,
    //   DairySelected:this.state.DairySelected,
    //   NoneSelected:this.state.NoneSelected

    // }


//     this.props.onSubmit(submission);


//     this.setState({
//       VeganSelected:false,
//       VegatarianSelected:false,
//       GlutenSelected:false,
//       NutSelected:false,
//       DairySelected:false,
//       NoneSelected:false
//     });
// }

    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit({
        // currentComponent: "recipe_list"
      });
    }

}
const mapActionsToProps = {
onSubmit: fetchRecipes
}

export default connect (null, mapActionsToProps)(DietaryPref);
