const taskHolder = document.querySelector('.task-holder');
const input = document.querySelector('.addinput');
const clearing = document.querySelector('.clearing');

class TodolistClass {
  constructor() {
    this.taskInfo = JSON.parse(localStorage.getItem('Todo')) || [];
  }

  addTask(doTask) {
    const todoobj = {
      description: doTask,
      completed: false,
      index: this.taskInfo.length,
    };
    this.taskInfo.push(todoobj);
    localStorage.setItem('Todo', JSON.stringify(this.taskInfo));
    return todoobj;
  }

  static displayTask(wee) {
    const taskElement = document.createElement('li');
    taskElement.classList.add(
      'px-0',
      'd-flex',
      'align-items-center',
      'py-1',
      'px-2',
      'task-element',
      'border-bottom',
    );

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const taskDescription = document.createElement('p');
    taskDescription.classList.add(
      'px-2',
      'align-items-center',
      'm-0',
      'container',
      'fs-5',
    );
    taskDescription.innerHTML = wee.description;
    if (wee.completed === true) {
      checkbox.checked = true;
      taskDescription.classList.add('text-decoration-line-through');
    } else {
      checkbox.checked = false;
      taskDescription.classList.add('text-decoration-none');
    }
  }

  // show task

  showTask() {
    this.taskInfo.forEach((tasks) => {
      TodolistClass.displayTask(tasks);
    });
  }

  removeSelectedTask(trash, index) {
    trash.addEventListener('click', () => {
      taskHolder.removeChild(trash.parentElement);
      this.taskInfo.splice(index, 1);
      this.taskInfo.forEach((list) => {
        if (list.index > index) {
          list.index -= 1;
        }
      });
      localStorage.setItem('Todo', JSON.stringify(this.taskInfo));
      window.location.reload();
    });
  }

  removeItem(index) {
    this.taskInfo.splice(index, 1);
    this.taskInfo.forEach((list) => {
      if (list.index > index) {
        list.index -= 1;
      }
    });
    localStorage.setItem('Todo', JSON.stringify(this.taskInfo));
  }

   filter

   remove(cl) {
     cl.addEventListener('click', () => {
       this.taskInfo = this.taskInfo.filter((cls) => cls.completed !== true);
       this.taskInfo.forEach((remain, index) => {
         if (remain.index !== index) {
           remain.index = index;
         }
       });
       localStorage.setItem('Todo', JSON.stringify(this.taskInfo));
       window.location.reload();
     });
   }
}

const tododisplay = new TodolistClass();

// function to expoert

function runfunction() {
  tododisplay.showTask();
  input.addEventListener('keypress', (e) => {
    if (input.value && e.key === 'Enter') {
      const newaddedTask = tododisplay.addTask(input.value);
      TodolistClass.displayTask(newaddedTask);
      input.value = '';
      e.preventDefault();
      window.location.reload();
    }
  });

  const dots = document.querySelectorAll('.dots');

  dots.forEach((ddt, index) => {
    ddt.addEventListener('click', () => {
      ddt.classList.add('d-none');
      ddt.nextElementSibling.classList.remove('d-none');
      tododisplay.removeSelectedTask(ddt.nextElementSibling, index);
    });
  });

  const checkbox = document.querySelectorAll('.checkbox');

  checkbox.forEach((chkbx, index) => {
    tododisplay.updateTaskStatus(chkbx, index);
  });

  tododisplay.remove(clearing);
}
runfunction();
module.exports = TodolistClass;
