import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants,showDietaryForm } from "../actions";


class CookOrBuy extends Component {



  render() {
        return (
          <div className="CookOrBuy">
            <h2 className="TITLE">Cook at home or go out?</h2>
            <ul className="BuyGuide" >

                <div className="iconGrouping" onClick= {this.props.showDietaryForm.bind(this)}>
                    <i className="fa fa-home" aria-hidden="true"></i>
                    <p className="Cook" type="button" value="cook">COOK AT HOME</p>
                </div>
                <div className="iconGrouping" onClick= {this.props.fetchRestaurants.bind(this)}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <p className="GoOut" type="button" value="goOut">GO OUT</p>
                </div>
            </ul>
          </div>

        );
      }



}

const mapActionsToProps = {
  showDietaryForm,
  fetchRestaurants


}



export default connect (null, mapActionsToProps)(CookOrBuy);
