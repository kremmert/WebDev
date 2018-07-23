
const initialState = {
	todos: [],
	id: 0
}

function rootReducer(state=initialState, action) {
	switch(action.type) {
		case "ADD_TODO":
			//add a todo
			var newState = Object.assign({}, state);
			newState.id++;
			return {
				...newState,
				todos: [...newState.todos, {task: action.task, id: newState.id}]
			};
		case "REMOVE_TODO":
			//remove a todo
			let todos = state.todos.filter(val => val.id !== +action.id);
			return {
				...state,
				todos
			}
		default:
			return state;
	}
}

const store = Redux.createStore(rootReducer);

$(document).ready(function() {
	//whenever a click on a button in a ul delete
	$("ul").on("click", "button", function(event) {
		store.dispatch({
			type: "REMOVE_TODO",
			id: $(event.target).attr("id")
		});
		$(event.target).parent().remove();
	})

	$("form").on("submit", function(event) {
		event.preventDefault();
		let newTask = $("#task").val();
		store.dispatch({
			type: "ADD_TODO",
			task: newTask
		});
		let currentState = store.getState();
		let newLi = $("<li>", {
			text: newTask
		});
		let newButton = $("<button>", {
			text: "X",
			id: currentState.id
		})
		newLi.append(newButton);
		$("#todos").append(newLi);
		$("form").trigger("reset");
	});
});
