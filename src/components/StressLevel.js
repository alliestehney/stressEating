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
            <ul className="StressIcon" >
              <li>  <button className="StressLevelIcon" type="submitlow" value="low" onClick={this.handleClick.bind(this)}>😎</button> </li>
              <li> <button className="StressLevelIcon" type="submitmed" value="medium" onClick={this.handleClick.bind(this)} >😨</button> </li>
              <li>  <button className="StressLevelIcon" type="submithigh" value="high" onClick={this.handleClick.bind(this)}>😫</button> </li>
            </ul>
          </div>

        );
      }

      handleClick(event) {
        event.preventDefault();
        this.props.onClick({
            stressLevel: event.target.value,
        });

      }

}


export default StressLevel;
