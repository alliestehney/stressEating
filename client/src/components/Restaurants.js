import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

    render() {

    	const restaurant = this.props.restaurant;

        return (

        	<div>
	        	<h2 className="RecipeListTitle">Restaurants Near You</h2>
			</div>
          );
    }

}

function mapStateToProps(state) {
	return {
		restaurants: state.restaurants
	}
}

export default connect(mapStateToProps)(Restaurants);
