
const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");

let tasks = [];

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title === "" || description === "") {
        return;
    }

    const task = {title: title, description: description, completed: false};

    tasks.push(task);

    renderTasks();

    taskForm.reset();
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const listItem = document.createElement("li");
        listItem.classList.add("taskCard");

        const title = document.createElement("h3");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        if (task.completed) {
            title.style.textDecoration = "line-through";
            description.style.textDecoration = "line-through";
        }

        const actions = document.createElement("div");
        actions.classList.add("taskActions");

        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo" : "Complete";
        completeButton.classList.add("completeButton");

        completeButton.addEventListener("click", function() {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("deleteButton");

        deleteButton.addEventListener("click", function() {
            tasks.splice(index, 1);
            renderTasks();
        });

        actions.appendChild(completeButton);
        actions.appendChild(deleteButton);

        listItem.appendChild(title);
        listItem.appendChild(description);
        listItem.appendChild(actions);

        taskList.appendChild(listItem);
    });
}
