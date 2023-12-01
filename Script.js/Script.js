//declaring function

document.getElementById('addTask').addEventListener('click', function() {
    let taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
      let newTask = document.createElement('li');
      newTask.innerHTML = taskInput + ' <button class="delete">Del</button>';
      document.getElementById('taskList').appendChild(newTask);
      document.getElementById('taskInput').value = '';
    }
  });
  document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
      e.target.parentNode.remove();
    }
  });