import React, { Component } from 'react';
import Recipe from './Recipes';
import { connect } from 'react-redux';
import WatchForScroll from './ScrollActions';

class RecipesList extends Component {

    render() {

        return (
        	<div className="recipesBackground">
        		<h2 className="RecipeListTitle">Recipe Suggestions</h2>
	            <p className="RecipeTitleP">Because you indicated a <strong>{this.props.stressLevel}</strong> stress level, we think these recipes will best help you with your stress!</p>
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
		isLoading: state.isLoading
	}
}

export default connect(mapStateToProps)(RecipesList);
