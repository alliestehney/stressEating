import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from "../actions"

class CookOrBuy extends Component {

  constructor(props) {
      super(props);
      this.state = {
        cookorbuy:"Cook",
        currentComponent:""
      };
  }

  render() {
        return (
          <div className="CookOrBuy">
            <h1 className="">Would you like to cook or go out?</h1>
            <ul className="BuyGuide" >
            <button className="Cook" type="button" value="cook" onClick={this.handleClick.bind(this)}>I want to cook</button>
            <button className="GoOut" type="button" value="goOut" onClick={this.handleClick.bind(this)}>I want to go out</button>

            </ul>
          </div>

        );
      }

      handleClick(event) {
        event.preventDefault();
        this.props.onClick(event.currentTarget.value);

      }

}




export default CookOrBuy;
