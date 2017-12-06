import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurant extends Component {

    render() {

    	const restaurant = this.props.restaurant;
        // const photos = this.props.restaurant.photos;
        let photos;
        let googleMapsLink;

        if (restaurant.photos) {
            photos = this.props.restaurant.photos;
            console.log(Array.isArray(photos));

            googleMapsLink = photos[0].html_attributions[0];
            console.log("PHOTOS: ", photos);
            console.log(googleMapsLink);
        } 

        return (
        	<div className="animated fadeInUp RecipeCard">
                <div className="RecipeTitle"><a target="_blank" href={`https://www.google.com/maps/place/${restaurant.name}/@${restaurant.geometry.location.lat},${restaurant.geometry.location.lng}`}>{restaurant.name}</a></div>
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
