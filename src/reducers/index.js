const INITIAL_STATE = {
    stressLevel: "",
    dietaryRestrictions: [],
	currentComponent: "stress_form",
    recipes: [],
    loading: [], // array that will have 3 and then we add to it
    isLoading: false
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case "SHOW_DIETARY_FORM":
			 return Object.assign({}, state, {
				  stressLevel: action.stressLevel,
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

		default:
			return state;
	}
}
