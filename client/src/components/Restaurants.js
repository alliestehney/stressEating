import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurant extends Component {

    render() {

    	const restaurant = this.props.restaurant;

        return (
        	<div>
                <div className="RecipeTitle">{restaurant.name}</div>
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
