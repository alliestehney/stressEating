const INITIAL_STATE = {
    stressLevel: "low",
    dietaryRestrictions: "none",
	  currentComponent: "stress_form",
    recipes: []
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
            console.log("receive recs");
              return Object.assign({}, state, {
                recipes: action.recipes,
                currentComponent: "recipe_list"
              });

		default:
			return state;
	}
}
