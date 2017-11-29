import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
// url with default argument. If called without an argument (as in index.js), it
// will default to the main URL.
export function fetchRecipes() {
    return function(dispatch) {
        dispatch(requestRecipes());
        $.get("/fakeApi.json", function(data) {
            // // Here is where we dig into the response JSON to find the data we actually need.
            const recipes = data.hits;
            // const prevPageUrl = data.previous;
            // const nextPageUrl = data.next;
            console.log(recipes);
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
export function receiveRecipes(recipes) {
    return {
        type: "RECEIVE_RECIPES",
        recipes
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
