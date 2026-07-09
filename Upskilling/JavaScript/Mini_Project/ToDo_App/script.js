const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const clearCompletedButton = document.getElementById("clearCompleted");

let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.replaceChildren();
    emptyMessage.hidden = tasks.length > 0;

    tasks.forEach(function (task) {
        const item = document.createElement("li");
        const checkbox = document.createElement("input");
        const text = document.createElement("span");
        const deleteButton = document.createElement("button");

        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", `Mark ${task.text} as complete`);
        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        text.textContent = task.text;
        deleteButton.type = "button";
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            tasks = tasks.filter(function (currentTask) {
                return currentTask.id !== task.id;
            });
            saveTasks();
            renderTasks();
        });

        item.classList.toggle("completed", task.completed);
        item.append(checkbox, text, deleteButton);
        taskList.appendChild(item);
    });
}

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();

    if (!taskText) {
        return;
    }

    tasks.push({
        id: Date.now(),
        text: taskText,
        completed: false
    });

    saveTasks();
    renderTasks();
    taskForm.reset();
    taskInput.focus();
});

clearCompletedButton.addEventListener("click", function () {
    tasks = tasks.filter(function (task) {
        return !task.completed;
    });
    saveTasks();
    renderTasks();
});

renderTasks();
