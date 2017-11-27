const INITIAL_STATE = {
    stressLevel: "low",
		dietaryRestriction: "none",
		currentComponent: "stress_form"
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {

		case "SHOW_DIETARY_FORM":
			return Object.assign({}, state, {
				stressLevel: action.stressLevel,
				currentComponent: action.currentComponent
			});
		default:
			return state;
	}
}
