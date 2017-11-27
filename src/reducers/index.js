const INITIAL_STATE = {
    stressLevel: "low",
<<<<<<< HEAD
    dietaryRestrictions: "none"
=======
		dietaryRestriction: "none",
		currentComponent: "stress_form"
>>>>>>> 1c7173c5f486779f8d4443de93666ad196be5051
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
<<<<<<< HEAD
		case "SHOW_DIETARY_FORM":
			
=======

		case "SHOW_DIETARY_FORM":
			return Object.assign({}, state, {
				stressLevel: action.stressLevel,
				currentComponent: action.currentComponent
			});
>>>>>>> 1c7173c5f486779f8d4443de93666ad196be5051
		default:
			return state;
	}
}
