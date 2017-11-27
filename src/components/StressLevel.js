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




// //
//     onSubmit(event) {
//         // by default a form submission will refresh the page. preventDefault stops that from happening.
//         event.preventDefault();
//         // Call the function that App.js passes into the onSubmit attribute.
//         // Pass it a new contact object.
//         this.props.onSubmit({
//             email: this.state.email,
//             password: this.state.password
//         })
        // Clear the form by simply updating the state with empty form values.

}


const mapActionsToProps = {
    showDietaryForm
}


export default connect(null, mapActionsToProps)(StressLevel);
