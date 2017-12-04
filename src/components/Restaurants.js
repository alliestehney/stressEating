import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

    render() {

        return (

        		<h2 className="RecipeListTitle">Restaurants Near You</h2>
          );
    }

}

function mapStateToProps(state) {
	return {
		cookorbuy: state.cookorbuy
	}
}

export default connect(mapStateToProps)(Restaurants);
