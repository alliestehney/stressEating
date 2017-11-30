import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
// url with default argument. If called without an argument (as in index.js), it
// will default to the main URL.

const baseURL = "https://api.edamam.com/search?q=snack&app_id=897ca38f&app_key=33c0d8147fe73cdb547a8cdc6b8e4008&from=0&to=24&calories=lte500&diet=balanced"
//URL param's based on stress Level (low has no params)
let low = "&ingr=20";
let medium = "&ingr=8";
let high = "&ingr=5";

let vegan = "&health=vegan";
let vegetarian = "&health=vegetarian";
let glutenfree = "&health=gluten-free";
let nutfree = "&health=peanut-free&healthLabels=tree-nut-free";
let dairyfree = "&health=dairy-free";
let soyfree = "&health=soy-free";

export function fetchRecipes(dietaryRestrictions) {
    return function(dispatch, getState) {
        dispatch(requestRecipes());
        dispatch(addDiet(dietaryRestrictions));

        const state = getState();
        var stressLevel = state.stressLevel;
        var diet=dietaryRestrictions.dietaryRestrictions;

        var url = baseURL;
        for (var i = 0; i<diet.length; i++) {
          if (diet[i] === 'vegan' && stressLevel === 'medium') {
              url = baseURL + medium + vegan;
            }
          if (diet[i] === 'vegan' && stressLevel === 'high') {
              url = baseURL + high + vegan;
            }
          if (diet[i] === 'vegan' && stressLevel === 'low') {
              url = baseURL + low + vegan;
              }

          if (diet[i] === 'vegetarian' && stressLevel === 'medium') {
                url = baseURL + medium + vegetarian;
              }
          if (diet[i] === 'vegetarian' && stressLevel === 'high') {
                url = baseURL + high + vegetarian;
              }
          if (diet[i] === 'vegetarian' && stressLevel === 'low') {
                url = baseURL + low + vegetarian;
                }

          if (diet[i] === 'glutenfree' && stressLevel === 'medium') {
                url = baseURL + medium + glutenfree;
              }
          if (diet[i] === 'glutenfree' && stressLevel === 'high') {
                url = baseURL + high + glutenfree;
              }
          if (diet[i] === 'glutenfree' && stressLevel === 'low') {
                url = baseURL + low + glutenfree;
                }

          if (diet[i] === 'nutfree' && stressLevel === 'medium') {
                url = baseURL + medium + nutfree;
              }
          if (diet[i] === 'nutfree' && stressLevel === 'high') {
                url = baseURL + high + nutfree;
              }
          if (diet[i] === 'nutfree' && stressLevel === 'low') {
                url = baseURL + low + nutfree;
                }

          if (diet[i] === 'dairyfree' && stressLevel === 'medium') {
                url = baseURL + medium + dairyfree;
              }
          if (diet[i] === 'dairyfree' && stressLevel === 'high') {
                url = baseURL + high + dairyfree;
              }
          if (diet[i] === 'dairyfree' && stressLevel === 'low') {
                url = baseURL + low + dairyfree;
                }

          if (diet[i] === 'soyfree' && stressLevel === 'medium') {
                url = baseURL + medium + soyfree;
              }
          if (diet[i] === 'soyfree' && stressLevel === 'high') {
                url = baseURL + high + soyfree;
              }
          if (diet[i] === 'soyfree' && stressLevel === 'low') {
                url = baseURL + low + soyfree;
                }
        }

        $.get(url, function(data) {

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

export function showDietaryForm(stressLevel) {
  return {
    type: "SHOW_DIETARY_FORM",
    stressLevel
  };
}

export function showRecipes() {
  return {
    type: "SHOW_RECIPES",
  };
}
export function addDiet(dietaryRestrictions) {
  return {
    type: "ADD_DIET",
    dietaryRestrictions
  };
}
