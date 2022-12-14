const taskHolder = document.querySelector('.task-holder');
const taskInfo = [
  {
    description: 'drink water',
    completed: false,
    index: 1,
  },
  {
    description: 'drink milk',
    completed: false,
    index: 2,
  },
  {
    description: 'drink soft drink',
    completed: false,
    index: 2,
  },
];

export default function displayTask() {
  taskInfo.forEach((task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('px-0', 'd-flex', 'align-items-center', 'py-1', 'px-2', 'task-element');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const taskDescription = document.createElement('p');
    taskDescription.classList.add('px-2', 'align-items-center', 'm-0', 'container', 'fs-5');
    taskDescription.innerHTML = task.description;

    const dots = document.createElement('span');
    dots.classList.add('dots');
    dots.innerHTML = `<svg class="text-secondary text-opacity-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>`;

    const bin = document.createElement('span');
    bin.classList.add('d-none', 'bin');
    bin.innerHTML = `<svg class="text-secondary text-opacity-10" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>`;

    const underline = document.createElement('hr');
    underline.classList.add('my-0');

    taskElement.append(checkbox, taskDescription, dots, bin);
    taskHolder.append(taskElement, underline);
  });
}


