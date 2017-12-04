import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants,showDietaryForm,showRestaurants } from "../actions";


class CookOrBuy extends Component {



  render() {
        return (
          <div className="CookOrBuy">
            <h1 className="">Would you like to cook or go out?</h1>
            <ul className="BuyGuide" >
            <button className="Cook" type="button" value="cook" onClick= {this.props.showDietaryForm.bind(this)}>I want to cook</button>
            <button className="GoOut" type="button" value="goOut" onClick= {this.props.showRestaurants.bind(this)}>I want to go out</button>

            </ul>
          </div>

        );
      }

      

}

const mapActionsToProps = {
  showDietaryForm,
  showRestaurants

}



export default connect (null, mapActionsToProps)(CookOrBuy);
