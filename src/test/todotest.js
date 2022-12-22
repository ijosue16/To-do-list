const taskHolder = document.querySelector('.task-holder');


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


module.exports = TodolistClass;
