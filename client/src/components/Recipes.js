import React, { Component } from 'react';


class Recipe extends Component {

	render() {
		const recipe = this.props.recipe;
		const ingredientsList = recipe.ingredientLines;

		return(
				<div className="animated fadeInUp RecipeCard">
					<div className="RecipeTitle"><a target="_blank" href={recipe.url}>{recipe.label}</a></div>
					<img className="RecipeImage" src={recipe.image} alt="recipe details"  />
					<div className="Ingredients">
						{ingredientsList.map(ingredient =>
							<li key={ingredient}>{ingredient}</li>
						)}
					</div>

				</div>

		);
	}
}

export default Recipe;
