const INITIAL_STATE = {
    stressLevel: "low",
    dietaryRestrictions: "none"
}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case "SHOW_DIETARY_FORM":
			
		default:
			return state;
	}
}
