import React, { Component } from 'react';
import Recipe from './Recipes';
InfiniteScroll = require('react-infinite-scroll')(React);

class RecipesList extends Component {

    render() {

        return (
        	<div className="recipesBackground">
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
