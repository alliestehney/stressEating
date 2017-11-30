import React, { Component } from 'react';
import Recipe from './Recipes';

class RecipesList extends Component {

    render() {

        return (
        	<div className="recipesBackground">
        		<h2 className="RecipeListTitle">Recipe Suggestions</h2>
	            <p className="RecipeTitleP">We've taken in your stress level and looked at your dietary restrictions to curate the best recipes for you. Don't worry, be happy!</p>
	            <ul className="RecipeList FlexContainer">
	                {this.props.recipes.map(recipe =>
	                    <Recipe key={recipe.recipe.uri} recipe={recipe.recipe} />
	                )}
	            </ul>
	        </div>
        );
    }

}

export default RecipesList;
