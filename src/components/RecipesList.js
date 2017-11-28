import React, { Component } from 'react';
import Recipe from './Recipes';

class RecipesList extends Component {

    render() {

        return (
            <ul className="RecipeList">
                {this.props.recipes.map(recipe =>
                    <Recipe key={recipe.uri} recipe={recipe} />
                )}
            </ul>
        );
    }

}

export default RecipesList;
