
const initialState = {
	count: 0
}


function rootReducer(state=initialState, action) {
	switch(action.type) {
		case "INCREMENT":
			let newState = Object.assign({}, state);
			newState.count++;
			return newState;
		case "DECREMENT":
			let subState = Object.assign({}, state);
			subState.count--;
			return subState;
		default:
			return state;
	}
}

const store = Redux.createStore(rootReducer);

function updateCounter() {
	let currentState = store.getState();
	$("#counter").text(currentState.count);
}

$(document).ready(function() {
	updateCounter();
	$("#increment").on("click", function() {
		store.dispatch({
			type: "INCREMENT"
		});
		updateCounter();
	});
	$("#decrement").on("click", function() {
		store.dispatch({

			type: "DECREMENT"
		});
		updateCounter();
	});
});
