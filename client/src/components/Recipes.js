import React, { Component } from 'react';


class Recipe extends Component {

	render() {
		const recipe = this.props.recipe;
		const ingredientsList = recipe.ingredientLines;

		return(
				<div className="animated fadeInUp RecipeCard">
					<div className="RecipeTitle">{recipe.label}</div>
					<img className="RecipeImage" src={recipe.image} alt="recipe details"  />
					<div className="Ingredients">
						{ingredientsList.map(ingredient =>
							<li>{ingredient}</li>
						)}
					</div>
					<div className="RecipeLink"> <a href={recipe.url}>Let's make this!</a></div>
				</div>

		);
	}
}

export default Recipe;
