import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions';
import RestaurantsList from "./RestaurantsList";

class RestaurantsRequest extends Component {



	render() {

		
		return (
			this.props.restaurants ? <RestaurantsList  restaurants={this.props.restaurants} /> : <p>LOADING...</p>
		);
	}

	componentWillMount() {
		this.props.fetchRestaurants(this.props.lat, this.props.long);
	}
}



const mapActionsToProps = {
	fetchRestaurants
}

function mapStateToProps(state) {
	return {
		restaurants: state.restaurants
	}
}

export default connect(mapStateToProps, mapActionsToProps)(RestaurantsRequest)