const toDoForm =
  document.querySelector(".toDo-form");
const toDoInput = document.querySelector(
  ".toDo-form input"
);
const toDoList =
  document.querySelector(".toDo-list");
const TODOS_KEY = "todos";
let toDos = [];

const deleteToDo = (event) => {
  const li = event.target.parentElement;
  toDos = toDos.filter((item) => {
    return item.id !== parseInt(li.id);
  });
  saveToDo(TODOS_KEY, toDos);
  li.remove();
};

const saveToDo = () => {
  localStorage.setItem(
    TODOS_KEY,
    JSON.stringify(toDos)
  );
};

const paintToDo = (toDo) => {
  const li = document.createElement("li");
  li.id = toDo.id;
  const span = document.createElement("span");
  span.innerText = toDo.text;
  const button = document.createElement("button");
  button.innerText = "delete";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const submitToDo = (event) => {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
};

toDoForm.addEventListener("submit", submitToDo);

const savedToDos =
  localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
