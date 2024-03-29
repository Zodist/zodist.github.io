export function loadTodo() {
    const toDoForm = document.getElementById("todo-form");
    const toDoInput = toDoForm.querySelector("input");
    const toDoList = document.getElementById("todo-list");

    const TODOS_KEY = "todos";

    let toDos = [];

    function saveTodos() {
        localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    }

    function deleteToDo(e) {
        const li = e.target.parentElement;
        li.remove();
        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        saveTodos();
    }

    function paintToDo(newTodoObj) {
        const li = document.createElement("li");
        li.id = newTodoObj.id;

        const span = document.createElement("span");
        span.innerText = newTodoObj.text;

        const button = document.createElement("button");
        button.innerText = "❌";
        button.addEventListener("click", deleteToDo)

        li.appendChild(span);
        li.appendChild(button);

        toDoList.appendChild(li);
    }

    function handleToDoSubmit(event) {
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value = "";
        const newTodoObj = {
            text: newTodo,
            id: Date.now()
        }
        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveTodos();
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);

    const savedToDos = localStorage.getItem(TODOS_KEY);

    if (savedToDos) {
        const paredToDos = JSON.parse(savedToDos);
        toDos = paredToDos;
        paredToDos.forEach(paintToDo);
    }
}