const INITIAL_STATE = {
    stressLevel: "low",
    dietaryRestrictions: "none",
	currentComponent: "stress_form"
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case "SHOW_DIETARY_FORM":
			return Object.assign({}, state, {
				stressLevel: action.stressLevel,
				currentComponent: "dietary_restrictions"
			});
		default:
			return state;
	}
}
