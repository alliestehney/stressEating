import React, { Component } from 'react';
import Restaurant from './Restaurants';
import { connect } from 'react-redux';

class RestaurantsList extends Component {

	render() {

		return(
			<div className="restaurantsBackground">
				<h2 className="TITLE">Nearby Restaurants</h2>
				<p className="RecipeTitleP">Your stress is <span className="animated bounceIn stressInline">{this.props.stressLevel}</span> - take a break and go grab food.</p>
	            <ul className="RecipeList FlexContainer">
	                {this.props.restaurants.map(restaurant =>
	                    <Restaurant key={restaurant.id} restaurant={restaurant} />

	                )}
	            </ul>
							
	        </div>

		);
	}
}

function mapStateToProps(state) {
	return {
		restaurants: state.restaurants,
		stressLevel: state.stressLevel
	}
}

export default connect(mapStateToProps)(RestaurantsList);
