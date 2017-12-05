import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurant extends Component {

    render() {

    	const restaurant = this.props.restaurant;
        // const photos = this.props.restaurant.photos;
        let photos;

        if (restaurant.photos) {
            photos = this.props.restaurant.photos;
            console.log(Array.isArray(photos));
        } 


        return (
        	<div className="animated fadeInUp RecipeCard">
                <div className="RecipeTitle">{restaurant.name}</div>
                <div className="RestaurantAddress">{restaurant.vicinity}</div>
			</div>
          );
    }

}

function mapStateToProps(state) {
	return {
		restaurants: state.restaurants
	}
}

export default connect(mapStateToProps)(Restaurant);
