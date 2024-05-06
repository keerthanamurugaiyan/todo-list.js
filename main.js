const inputValue = document.getElementById("inputItem");
const addButton = document.getElementById("enter");
const toDoList = document.getElementById("todolist");

let todos = [];
window.onload = () => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
    addFunction();
}
function addFunction() {
    let table = "";
    todos.forEach((todo, id) => {
        table += `<li class="border d-flex justify-content-between col-12 rounded p-1 mt-3" onclick="crossOut(this)">${todo}
            <button class="btn btn-danger" onclick="deleteFunction(${id})"><i class="fa-solid fa-x text-white"></i></button>
        </li>`;
    });
    document.getElementById("todolist").innerHTML = table;
}
function crossOut(li) {
    li.classList.toggle("done");
}
addButton.addEventListener("click", function (event) {
    event.preventDefault();
    const input = inputValue.value;
    if (input.trim() !== "") {
        todos.push(input);
        localStorage.setItem("todos", JSON.stringify(todos))
        addFunction();
        inputValue.value = "";
    } else {
        alert("please enter a valid task");
    }
});

function deleteFunction(id) {
    localStorage.setItem("todos", JSON.stringify(todos))
    todos.splice(id, 1);
    addFunction();
}