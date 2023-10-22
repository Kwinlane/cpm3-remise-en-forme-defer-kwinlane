function addTask() {
    var taskText = document.getElementById("new-task").value;
    if (taskText.trim() === "") return;
    
    var taskList = document.getElementById("task-items");
    var li = document.createElement("li");
    li.innerHTML = taskText;
    
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "Supprimer";
    deleteButton.onclick = function() {
      li.remove();
    };
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    
    document.getElementById("new-task").value = "";
  }