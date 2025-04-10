
let selectedTask = null;

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const circle = document.createElement("div");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("span");

  circle.className = "circle";
  circle.onclick = () => {
    circle.classList.toggle("completed");
    li.classList.toggle("completed");
  };

  span.textContent = taskText;

  deleteBtn.className = "delete";
  deleteBtn.innerHTML = "×";
  deleteBtn.onclick = () => li.remove();

  li.onclick = () => {
    if (selectedTask) selectedTask.classList.remove("selected");
    selectedTask = li;
    li.classList.add("selected");
  };

  li.appendChild(circle);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

document.getElementById("taskInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Delete" && selectedTask) {
    selectedTask.remove();
    selectedTask = null;
  }
document.getElementById("clearAllBtn").addEventListener("click", function () {
    document.getElementById("taskList").innerHTML = "";
    selectedTask = null;
  });
  
});
