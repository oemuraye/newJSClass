// Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;

// Get elements from the DOM
// const guessInput = document.getElementById('guess');
// const checkButton = document.getElementById('check');
// const message = document.getElementById('message');

// guessInput.addEventListener('focus', () => {
//     message.textContent = ''
// })

// // Event listener for the "Check" button
// checkButton.addEventListener('click', function() {
//     const userGuess = parseInt(guessInput.value);

//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         showMessage('Please enter a valid number between 1 and 100.');
//         message.style.color = 'red';
//         return;
//     }

//     // Check if the guess is correct
//     if (userGuess === randomNumber) {
//         message.textContent = `Congratulations! You guessed the correct number in ${attempts + 1} attempts.`;
//         message.style.color = 'green';
//         guessInput.disabled = true;
//         checkButton.disabled = true;
//     } else {
//         attempts++;
//         if (userGuess < randomNumber) {
//             showMessage('Try a higher number.');
//             message.style.color = 'red';
//         } else {
//             showMessage('Try a lower number.');
//             message.style.color = 'red';
//         }
//     }
// });

// function showMessage(messageDisplayed) {
//     message.textContent = messageDisplayed;
// }


// todo game
// function addTask() {
//     const taskText = document.getElementById('task').value;

//     if (taskText.trim() === '') {
//         return;
//     }

//     const taskList = document.getElementById('taskList');
//     const li = document.createElement('li');
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';

//     checkbox.addEventListener('change', () => {
//         if (checkbox.checked) {
//             li.style.textDecoration = 'line-through';
//         } else {
//             li.style.textDecoration = 'none';
//         }
//     });

//     li.appendChild(checkbox);
//     li.appendChild(document.createTextNode(taskText));

//     taskList.appendChild(li);
//     document.getElementById('task').value = '';
// }

// function clearCompletedTasks() {
//     const taskList = document.getElementById('taskList');
//     const completedItems = taskList.querySelectorAll('li input[type="checkbox"]:checked');

//     completedItems.forEach((completedItem) => {
//         const listItem = completedItem.parentNode;
//         taskList.removeChild(listItem);
//     });
// }




// ... Guess game
const guessInput = document.getElementById('guess'); 
const checkBtn = document.getElementById('check'); 
const messageBox = document.getElementById('message'); 
const numOfAttempts = document.querySelector('.attempts span'); 
const resetBtn = document.querySelector('.reset_btn');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const showMessage = (messageDisplay) => {
    messageBox.textContent  = messageDisplay
}

guessInput.addEventListener('focus', () => {
    showMessage('')
})

checkBtn.addEventListener('click', () => {
    const guessInputValue = Number(guessInput.value);

    resetBtn.style.display = 'block';

    // validate the input value
    if (guessInputValue === '' || isNaN(guessInputValue) || guessInputValue < 1 || guessInputValue > 100) {
        showMessage('Please enter a valid number between 1 and 100.');
        messageBox.style.color = "red";
        return;
    }
    
    // validate the guess number
    // check if the number is equal to the random generated number
    // check if the number is greater than the random generated number
    // check if the number is less than the random generated number
    
    if (guessInputValue === randomNumber) {
        // showMessage('Congratulations! You guessed the correct number in ' + attempts + '  attempts')
        showMessage(`Congratulations! You guessed the correct number in ${attempts} attempts`)
        messageBox.style.color = "green";
        // checkBtn.style.display = 'none';
        checkBtn.disable = true;
    } else {
        attempts++;
        numOfAttempts.innerHTML = attempts
        if (guessInputValue < randomNumber) {
            showMessage('Try a higher number')
            messageBox.style.color = "red";
        } else {
            showMessage('Try a lower number')
            messageBox.style.color = "red";
        }
    }
});

// restart game
resetBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    showMessage('');
    checkBtn.disable = false;
    resetBtn.style.display = 'none';
})


// Todo list
const addTask = () => {
    const taskText = document.getElementById('task').value;
    
    if (taskText === '') {
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
    })
    
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));
    
    taskList.appendChild(li);
    document.getElementById('task').value = '';
}


document.getElementById('clear_completed_task').addEventListener('click', () => {
    const taskList = document.getElementById('taskList');
    const completedTask = taskList.querySelectorAll('li input[type=checkbox]:checked');

    completedTask.forEach((completedTodo) => {
        const listItem = completedTodo.parentNode;
        taskList.removeChild(listItem)
    });

});
