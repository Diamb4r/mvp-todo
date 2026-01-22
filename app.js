const input = document.getElementById("new-task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    taskList.innerHTML = "";
    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.textContent = task;
        li.onclick = () => removeTask(i);
        taskList.appendChild(li);
    });
}

function addTask() {
    const task = input.value.trim();
    if (!task) return;
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
}

function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}

addBtn.addEventListener("click", addTask);
window.onload = loadTasks;
