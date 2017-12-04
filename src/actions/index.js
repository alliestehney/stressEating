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
let peanutfree = "&health=peanut-free"
let treenutfree = "&health=tree-nut-free"
let lowcarb = "&diet=low-carb"
let highprotein = "&deit=high-protein"

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

          if (diet[i] === 'highprotein' && stressLevel === 'medium') {
                url = baseURL + medium + highprotein;
              }
          if (diet[i] === 'highprotein' && stressLevel === 'high') {
                url = baseURL + high + highprotein;
              }
          if (diet[i] === 'highprotein' && stressLevel === 'low') {
                url = baseURL + low + highprotein;
                }

          if (diet[i] === 'peanutfree' && stressLevel === 'medium') {
                url = baseURL + medium + peanutfree;
              }
          if (diet[i] === 'peanutfree' && stressLevel === 'high') {
                url = baseURL + high + peanutfree;
              }
          if (diet[i] === 'peanutfree' && stressLevel === 'low') {
                url = baseURL + low + peanutfree;
                }

          if (diet[i] === 'treenutfree' && stressLevel === 'medium') {
                url = baseURL + medium + treenutfree;
              }
          if (diet[i] === 'treenutfree' && stressLevel === 'high') {
                url = baseURL + high + treenutfree;
              }
          if (diet[i] === 'treenutfree' && stressLevel === 'low') {
                url = baseURL + low + treenutfree;
                }

          if (diet[i] === 'lowcarb' && stressLevel === 'medium') {
                url = baseURL + medium + lowcarb;
              }
          if (diet[i] === 'lowcarb' && stressLevel === 'high') {
                url = baseURL + high + lowcarb;
              }
          if (diet[i] === 'lowcarb' && stressLevel === 'low') {
                url = baseURL + low + lowcarb;
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


export function fetchRestaurants() {
  return function(dispatch) {
    dispatch(requestRestaurants());
    $.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.3314,-83.0458&radius=500&type=restaurant&keyword=healthy&key=AIzaSyCJ-0UYImFpimu4zBf-yRJXmZgKnUAcIhY", function(data){
      const restaurants = data.results;
        dispatch(receiveRestaurants(restaurants));
        console.log(restaurants);
    })
  }
}

export function requestRestaurants() {
    return {
        type: "REQUEST_RESTAURANTS"
    }
}
export function receiveRestaurants(restaurants) {
    console.log("whatsup");
    return {
        type: "RECEIVE_RESTAURANTS",
        restaurants
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

export function showDietaryForm(cookorbuy) {
  return {
    type: "SHOW_DIETARY_FORM",
    cookorbuy
  };
}

export function showCookOrBuy(stressLevel) {
  return {
    type: "SHOW_COOK_OR_BUY",
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

export function createLoadingList() {
  return {
    type: "CREATE_LOADING_LIST"
  }
}
