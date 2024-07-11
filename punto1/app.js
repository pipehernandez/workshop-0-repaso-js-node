class Task {
  constructor(id, description, completed = false) {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}

class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.loadTasks();
  }

  addTask(description) {
    const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    const task = new Task(id, description);
    this.tasks.push(task);
    this.saveTasks();
    this.renderTasks();
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
    this.renderTasks();
  }

  toggleTaskComplete(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.toggleComplete();
      this.saveTasks();
      this.renderTasks();
    }
    else{
      alert("Tarea no encontrada")
    }
  }

  saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  loadTasks() {
    this.renderTasks();
  }

  renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    this.tasks.forEach((task) => {
      const item = document.createElement("li");
      item.textContent = `Tarea ${task.id}: ${task.description}. Completa: ${task.completed} `;
      item.className = task.completed ? "completed" : "";
      // item.addEventListener("click", () => this.toggleTaskComplete(task.id));
      // este evento cambiaba el estado de la tarea al darle click a la etiqueta li

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Evitar que el evento se propague al elemento padre, ¿Por qué? Porque el evento click en el botón también se propaga al elemento li.
        this.deleteTask(task.id);
      });

      const completedButton = document.createElement("BUTTON");
      completedButton.textContent = "Cambiar estado";
      completedButton.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleTaskComplete(task.id);
      });

      const editBtn = document.createElement("BUTTON");
      editBtn.textContent = "Editar";
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const editInput = document.createElement("INPUT");
        const editDescriptionBtn = document.createElement("BUTTON");
        editDescriptionBtn.textContent = "Editar";
        editInput.value = `${task.description}`;
        item.appendChild(editInput);
        item.appendChild(editDescriptionBtn);
        editDescriptionBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          task.description = editInput.value;
          this.loadTasks();
        });
      });

      item.appendChild(editBtn);
      item.appendChild(completedButton);
      item.appendChild(deleteButton);
      taskList.appendChild(item);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const taskManager = new TaskManager();
  document.getElementById("add-task").addEventListener("click", () => {
    const newTask = document.getElementById("new-task").value;
    if (newTask) {
      taskManager.addTask(newTask);
      document.getElementById("new-task").value = "";
    }
  });
});
