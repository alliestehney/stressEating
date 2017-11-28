import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showDietaryForm } from '../actions';

class StressLevel extends Component {

  constructor(props) {
      super(props);
      this.state = {
        stressLevel:"",
        currentComponent:""
      };
  }

  render() {
        return (
          <div className="StressForm">
            <h1>Welcome, how do you feel?</h1>
            <form className="StressIcon" >
              <button className="StressLevelIcon" type="submitlow" value="low" onClick={this.handleChange.bind(this)}>😎</button>
              <button className="StressLevelIcon" type="submitmed" value="medium" onClick={this.handleChange.bind(this)} >😨</button>
              <button className="StressLevelIcon" type="submithigh" value="high" onClick={this.handleChange.bind(this)}>😫</button>
            </form>
          </div>

        );
      }

      handleChange(event) {
        this.setState({
          stressLevel: event.target.value,
          currentComponent: "dietary_restrictions"
        });
      }


}


const mapActionsToProps = {
    showDietaryForm
}


export default connect(null, mapActionsToProps)(StressLevel);
