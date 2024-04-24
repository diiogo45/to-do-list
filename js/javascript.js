"mode strict";

const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("nextToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");


addTodoBtn.addEventListener("click",()=>{

const newTodoText  = newTodoInput.value;

if(newTodoText!==""){

	const newTodoItem = document.createElement("li");
	newTodoItem.innerText = newTodoText;
	const deleteToDoBtn = document.createElement("button");
	deleteToDoBtn.innerText = "X";


	deleteToDoBtn.classList.add("delete-todo-btn");
	deleteToDoBtn.addEventListener("click", function(){

		newTodoItem.remove();
	});	

	newTodoItem.appendChild(deleteToDoBtn);
	todoList.appendChild(newTodoItem);
	newTodoInput.value = "";
}

});