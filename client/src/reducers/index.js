const INITIAL_STATE = {
    stressLevel: "",
    dietaryRestrictions: [],
	  currentComponent: "stress_form",
    recipes: [],
    loading: [], // array that will have 3 and then we add to it
    isLoading: false,
    index: 3,
    restaurants: []
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case "SHOW_DIETARY_FORM":
			 return Object.assign({}, state, {
          cookorbuy: action.cookorbuy,
				  currentComponent: "dietary_restrictions"
		});
        case "REQUEST_RECIPES":
           return Object.assign({}, state, {
        });
        case "RECEIVE_RECIPES":
            console.log("Test");
            return Object.assign({}, state, {

                recipes: action.recipes,
                currentComponent: "recipe_list"
        });
        case "CREATE_LOADING_LIST":
            // when this action is called we want to add 3 more items from recipes into loading array
            console.log("Going into loading list action");

            const index = state.index;
            const newLoadingArray = state.recipes.slice(0, index);
            console.log("NEW LOADING ARRAY: ", newLoadingArray);
            console.log("RECIPE ARRAY: ", state.recipes);

            return Object.assign({}, state, {
                 loading: newLoadingArray,
                 index: index+3
             });
       case "SHOW_COOK_OR_BUY":
            return Object.assign({}, state, {
				          stressLevel: action.stressLevel,
		              currentComponent: "cook_or_buy"
              });
        case "REQUEST_RESTAURANTS":
           return Object.assign({}, state, {
        });

        case "RECEIVE_RESTAURANTS":
            return Object.assign({}, state, {
                restaurants: action.restaurants,
                currentComponent: "restaurants"
        });
        case "SHOW_RESTAURANTS":
           return Object.assign({}, state, {
             cookorbuy: action.cookorbuy,
             currentComponent: "restaurants"
        });

		default:
			return state;
	}
}
