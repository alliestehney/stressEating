import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
// url with default argument. If called without an argument (as in index.js), it
// will default to the main URL.

const baseURL = "https://api.edamam.com/search?q=snack&app_id=897ca38f&app_key=e7f2fe5fe8579deb5df02e319b15fb8a&from=0&to=24&calories=lte500&diet=balanced"
//URL param's based on stress Level (low has no params)
let medium = "&ingr=8";
let high = "&ingr=5";

let vegan = "&health=vegan";
let vegatarian = "&health=vegatarian";
let glutenfree = "&health=gluten-free";
let nutfree = "&health=peanut-free&healthLabels=tree-nut-free";
let dairyfree = "&health=dairy-free";
let soyfree = "&health=soy-free";

export function fetchRecipes() {
    return function(dispatch) {
        dispatch(requestRecipes());
        $.get((baseURL + nutfree), function(data) {

            // // Here is where we dig into the response JSON to find the data we actually need.
            const recipes = data.hits;
            // const prevPageUrl = data.previous;
            // const nextPageUrl = data.next;

            dispatch(receiveRecipes(recipes));
        });
    }
}

export function requestRecipes() {
    return {
        type: "REQUEST_RECIPES"
    }
}

// Allow the reducer to update the state when the request finishes and brings back data.
export function receiveRecipes(recipes, dietaryRestrictions) {
    return {
        type: "RECEIVE_RECIPES",
        recipes, dietaryRestrictions
    }
}

export function showDietaryForm() {
  return {
    type: "SHOW_DIETARY_FORM"
  };
}

export function showRecipes() {
  return {
    type: "SHOW_RECIPES",
  };
}
// export function addDiet(dietaryRestrictions) {
//   return {
//     type: "ADD_DIET",
//     dietaryRestrictions
//   };
// }
