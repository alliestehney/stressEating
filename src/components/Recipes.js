import React, { Component } from 'react';
import { connect } from 'react-redux';


class Recipe extends Component {

	render() {
		const recipe = this.props.recipe;

		return(
			<div className="FlexContainer">
				<div className="RecipeCard">
					<div className="RecipeTitle">{recipe.label}</div>
					<img src={recipe.image} alt="recipe image"  />
					<div className="Ingredients">
						<li>{recipe.ingredientLines}</li>
					</div>
				</div>
			</div>

		);
	}
}

export default Recipe;
