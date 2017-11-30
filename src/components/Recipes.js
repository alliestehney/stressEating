import React, { Component } from 'react';
import { connect } from 'react-redux';


class Recipe extends Component {

	render() {
		const recipe = this.props.recipe;
		const ingredientsList = recipe.ingredientLines;

		return(
				<div className="RecipeCard">
					<div className="RecipeTitle">{recipe.label}</div>
					<img src={recipe.image} alt="recipe image"  />
					<div className="Ingredients">
						{ingredientsList.map(ingredient => 
							<li>{ingredient}</li>
						)}
					</div>
				</div>

		);
	}
}

export default Recipe;
