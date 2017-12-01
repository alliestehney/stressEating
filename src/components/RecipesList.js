import React, { Component } from 'react';
import Recipe from './Recipes';
import { connect } from 'react-redux';

class RecipesList extends Component {

    render() {

        return (
        	<div className="recipesBackground">
        		<h2 className="RecipeListTitle">Recipe Suggestions</h2>
	            <p className="RecipeTitleP">Because you indicated a {this.props.stressLevel} stress level, we think these recipes will best help you with your stress!</p>
	            <ul className="RecipeList FlexContainer">
	                {this.props.recipes.map(recipe =>
	                    <Recipe key={recipe.recipe.uri} recipe={recipe.recipe} />
	                )}
	            </ul>
	        </div>
        );
    }

}

function mapStateToProps(state) {
	return {
		stressLevel: state.stressLevel
	}
}

export default connect(mapStateToProps)(RecipesList);
