// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Get elements from the DOM
const guessInput = document.getElementById('guess');
const checkButton = document.getElementById('check');
const message = document.getElementById('message');

guessInput.addEventListener('focus', () => {
    message.textContent = ''
})

// Event listener for the "Check" button
checkButton.addEventListener('click', function() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        showMessage('Please enter a valid number between 1 and 100.');
        message.style.color = 'red';
        return;
    }

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number in ${attempts + 1} attempts.`;
        message.style.color = 'green';
        guessInput.disabled = true;
        checkButton.disabled = true;
    } else {
        attempts++;
        if (userGuess < randomNumber) {
            showMessage('Try a higher number.');
            message.style.color = 'red';
        } else {
            showMessage('Try a lower number.');
            message.style.color = 'red';
        }
    }
});

function showMessage(messageDisplayed) {
    message.textContent = messageDisplayed;
}


// todo game
function addTask() {
    const taskText = document.getElementById('task').value;

    if (taskText.trim() === '') {
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through';
        } else {
            li.style.textDecoration = 'none';
        }
    });

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));

    taskList.appendChild(li);
    document.getElementById('task').value = '';
}

function clearCompletedTasks() {
    const taskList = document.getElementById('taskList');
    const completedItems = taskList.querySelectorAll('li input[type="checkbox"]:checked');

    completedItems.forEach((completedItem) => {
        const listItem = completedItem.parentNode;
        taskList.removeChild(listItem);
    });
}