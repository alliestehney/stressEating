const INITIAL_STATE = {
    stressLevel: "low",
    dietaryRestrictions: "none",
	currentComponent: "stress_form"
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case "SHOW_DIETARY_FORM":
			return Object.assign({}, state, {
				currentComponent: action.currentComponent
			});
		default:
			return state;
	}
}
