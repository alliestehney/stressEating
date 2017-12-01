const INITIAL_STATE = {
    stressLevel: "",
    dietaryRestrictions: [],
	currentComponent: "stress_form",
    recipes: [],
    loading: [], // array that will have 3 and then we add to it
    isLoading: false,
    index: 2
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
        case "CREATE_LOADING_LIST":
            // when this action is called we want to add 3 more items from recipes into loading array
            console.log("Going into loading list action");

            // const newLoadingArray = loading.slice(0);
            // newLoadingArray.push(recipes[index-2], recipes[index-1], recipes[index]);
            // index+=3;

            // return Object.assign({}, state, {
            //     loading: newLoadingArray
            // });

		default:
			return state;
	}
}
