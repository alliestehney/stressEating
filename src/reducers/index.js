const INITIAL_STATE = {
    stressLevel: "low",
    dietaryRestrictions: [],
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
    // case "SHOW_RECIPES":
    // console.log('showit');
    //   return Object.assign({}, state, {
    //   recipes: action.recipes,
    //     currentComponent: "recipe_list"
    //   });
    case "REQUEST_RECIPES":
       return Object.assign({}, state, {
        });
    case "RECEIVE_RECIPES":
console.log("Test");
        return Object.assign({}, state, {

            recipes: action.recipes,
            currentComponent: "recipe_list",
            dietaryRestrictions: action.dietaryRestrictions,

        });
        console.log(action.dietaryRestrictions);

		default:
			return state;
	}
}
