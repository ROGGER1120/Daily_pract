const form = document.getElementById('task-form');
const input = document.getElementById('input-task');
const taskList = document.getElementById('todo-tasks');
const emptyState = document.getElementById('empty-state');
const counter = document.getElementById('task-counter');
const clearCompleted = document.getElementById('clear-completed');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = JSON.parse(localStorage.getItem('glassTodoTasks') || '[]');
let currentFilter = 'all';

function saveTasks() {
    localStorage.setItem('glassTodoTasks', JSON.stringify(tasks));
}

function escapeHtml(text) {
    return text
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}


function getFilteredTasks() {
    if (currentFilter === 'active') {
        return tasks.filter(task => !task.completed);
    }
    if (currentFilter === 'completed') {
        return tasks.filter(task => task.completed);
    }
    return tasks;
}

function updateCounter() {
    const remaining = tasks.filter(task => !task.completed).length;
    counter.textContent = `${remaining} task${remaining === 1 ? '' : 's'} left`;
}

function renderTasks() {
    const filteredTasks = getFilteredTasks();
    taskList.innerHTML = '';

    if (filteredTasks.length === 0) {
        emptyState.style.display = 'flex';
    } else {
        emptyState.style.display = 'none';
    }

    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.dataset.id = task.id;

        li.innerHTML = `
            <button class="task-check ${task.completed ? 'done' : ''}" data-action="toggle" aria-label="Toggle task">
                <i class="fa-solid fa-check"></i>
            </button>
            <span class="task-text ${task.completed ? 'completed' : ''}">${escapeHtml(task.text)}</span>
            <button class="task-delete" data-action="delete" aria-label="Delete task">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        taskList.appendChild(li);
    });

    updateCounter();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    tasks.unshift({
        id: Date.now(),
        text,
        completed: false
    });

    saveTasks();
    renderTasks();
    input.value = '';
    input.focus();
});

taskList.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    const item = button.closest('.task-item');
    if (!item) return;

    const id = Number(item.dataset.id);
    const task = tasks.find(task => task.id === id);
    if (!task) return;

    if (button.dataset.action === 'toggle') {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }

    if (button.dataset.action === 'delete') {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentFilter = button.dataset.filter;
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderTasks();
    });
});

clearCompleted.addEventListener('click', () => {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderTasks();
});

renderTasks();