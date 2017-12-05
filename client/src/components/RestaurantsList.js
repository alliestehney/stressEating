import React, { Component } from 'react';
import Restaurant from './Restaurants';
import { connect } from 'react-redux';

class RestaurantsList extends Component {

	render() {

		return(
			<div className="restaurantsBackground">
	            <ul className="RecipeList FlexContainer">
	                {this.props.restaurants.map(restaurant =>
	                    <Restaurant key={restaurant.name} restaurant={restaurant} />
	                	
	                )}
	            </ul>
	        </div>

		);
	}
}

function mapStateToProps(state) {
	return {
		restaurants: state.restaurants
	}
}

export default connect(mapStateToProps)(RestaurantsList);