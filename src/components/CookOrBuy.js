import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants,showDietaryForm,showRestaurants } from "../actions";


class CookOrBuy extends Component {



  render() {
        return (
          <div className="CookOrBuy">
            <h2 className="TITLE">Cook at home or go out?</h2>
            <ul className="BuyGuide" >

                <div className="iconGrouping" onClick= {this.props.showDietaryForm.bind(this)}>
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <button className="Cook" type="button" value="cook">COOK AT HOME</button>
                </div>
                <div className="iconGrouping" onClick= {this.props.showRestaurants.bind(this)}>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <button className="GoOut" type="button" value="goOut">GO OUT</button>
                </div>
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
