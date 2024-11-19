// Simulated function to fetch tasks from a "server"
function fetchTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Buy groceries", "Walk the dog", "Read a book"]);
        }, 2000); // Simulate 2-second server delay
    });
}

// Function to render tasks on the page
function renderTasks(taskList) {
    const taskContainer = document.getElementById("tasks");
    taskContainer.innerHTML = ""; // Clear the existing task list

    taskList.forEach((task) => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task;
        taskItem.addEventListener("click", () => toggleComplete(taskItem));
        taskContainer.appendChild(taskItem);
    });
}

// Function to toggle completed state
function toggleComplete(taskItem) {
    taskItem.classList.toggle("completed");
}

// Fetch and display initial tasks when the page loads
document.addEventListener("DOMContentLoaded", async () => {
    const tasks = await fetchTasks();
    renderTasks(tasks);
});

// Add a new task to the list
document.getElementById("addTaskBtn").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const newTask = taskInput.value.trim();

    if (newTask) {
        const taskContainer = document.getElementById("tasks");

        // Add new task as a list item
        const taskItem = document.createElement("li");
        taskItem.textContent = newTask;
        taskItem.addEventListener("click", () => toggleComplete(taskItem));
        taskContainer.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }
});
