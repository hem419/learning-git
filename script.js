const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });
  taskList.appendChild(li);
  taskInput.value = "";
});
