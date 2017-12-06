import React, { Component } from 'react';
import Recipe from './Recipes';
import { connect } from 'react-redux';
import WatchForScroll from './ScrollActions';
import { createLoadingList } from '../actions';

class RecipesList extends Component {

	componentDidMount() {
		this.props.createLoadingList();
	}

    render() {

        return (
        	<div className="recipesBackground">
        		<h2 className="TITLE">Recipe Suggestions</h2>
	            <p className="RecipeTitleP">Try these recipes to help with your <span className="animated bounceIn stressInline">{this.props.stressLevel}</span> stress level!</p>
	            <ul className="RecipeList FlexContainer">
	                {this.props.loading.map(recipe =>

	                    <Recipe key={recipe.recipe.uri} recipe={recipe.recipe} />

	                )}
	            </ul>
	            <WatchForScroll />

	        </div>
	                );
    }

}

function mapStateToProps(state) {
	return {
		stressLevel: state.stressLevel,
		recipes: state.recipes,
		loading: state.loading,
		isLoading: state.isLoading,
		restaurants: state.restaurants
	}
}

const mapActionsToProps = {
	createLoadingList
}

export default connect(mapStateToProps, mapActionsToProps)(RecipesList);
