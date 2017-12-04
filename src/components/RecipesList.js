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
        		<h2 className="RecipeListTitle">Recipe Suggestions</h2>
	            <p className="RecipeTitleP">Because you indicated a <span className="animated bounceIn stressInline">{this.props.stressLevel}</span> stress level, we think these recipes will best help you with your stress!</p>
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

const mapActionsToProps = {
	createLoadingList
}

export default connect(mapStateToProps, mapActionsToProps)(RecipesList);
