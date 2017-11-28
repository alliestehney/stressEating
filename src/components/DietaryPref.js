import React, { Component } from 'react';
import { connect } from 'react-redux';


class DietaryPref extends Component{
    constructor(props){
      super(props);
      this.state = {
         VeganSelected:false,
         VegatarianSelected:false,
         GlutenSelected:false,
         NutSelected:false,
         DairySelected:false,
         NoneSelected:false
      };
    }

    render() {
      return(
          <form className = "DietaryPref">
            <h2>Dietary Preferences</h2>
            <label className="Dietary__label">Dietary Preferences</label>
            <p>
                <label> <input type="checkbox" checked={this.state.selected} onChange={this.handleVeganChange.bind(this)} /> Vegan </label>
                <label> <input type="checkbox" checked={this.state.selected} onChange={this.handleVegetarianChange.bind(this)}/> Vegatarian </label>
                <label> <input type="checkbox" checked={this.state.selected} onChange={this.handleGlutenFreeChange.bind(this)}/> Gluten-Free </label>
                <label> <input type="checkbox" checked={this.state.selected} onChange={this.handleNutFreeChange.bind(this)} /> Nut-Free </label>
                <label> <input type="checkbox" checked={this.state.selected} onChange={this.handleDairyFreeChange.bind(this)}/> Dairy-Free </label>
                <label> <input type="checkbox" checked={this.state.selected} onChange={this.handleNoneChange.bind(this)}/> None </label>

            </p>

            <button type="submit"> Submit</button>
          </form>
        );
      }

  handleVeganChange(event) {
        this.setState({
            VeganSelected: event.target.checked
        });
    }
    handleVegetarianChange(event) {
        this.setState({
            VegatarianSelected: event.target.checked
        });
    }
    handleGlutenFreeChange(event) {
        this.setState({
            GlutenSelected: event.target.checked
        });
    }
    handleNutFreeChange(event) {
        this.setState({
            NutSelected: event.target.checked
        });
    }
    handleDairyFreeChange(event) {
        this.setState({
            DairySelected: event.target.checked
        });
    }
    handleNoneChange(event) {
        this.setState({
            NoneSelected: event.target.checked
        });
    }
}

export default DietaryPref;
