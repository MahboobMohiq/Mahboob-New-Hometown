function learnMore(section) {
    alert("You are learning more about " + section + "!");
}

// Optional: Smooth scrolling effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Array to store facilitator names
let facilitators = [];

// Function to generate a random integer
function randomInt(n) {
    return Math.floor(Math.random() * n);
}

// Function to get a random member from an array
function randomMember(arr) {
    return arr[randomInt(arr.length)];
}

// Function to update the facilitator list in the UI
function updateFacilitatorList() {
    const listElement = document.getElementById('facilitator-list');
    listElement.innerHTML = ''; // Clear the existing list

    facilitators.forEach((name, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = name;

        // Add a delete button for each facilitator
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';

        // Add event listener to delete button
        deleteButton.addEventListener('click', () => {
            facilitators.splice(index, 1); // Remove the item from the array
            updateFacilitatorList(); // Update the UI
        });

        listItem.appendChild(deleteButton); // Append the delete button to the list item
        listElement.appendChild(listItem); // Append the list item to the list
    });
}

// Handle "Add New Facilitator" button click
document.getElementById('add-facilitator-btn').addEventListener('click', function () {
    const inputElement = document.getElementById('facilitator-input');
    const name = inputElement.value.trim();

    if (name) {
        facilitators.push(name); // Add the name to the array
        inputElement.value = ''; // Clear the input field
        updateFacilitatorList(); // Update the list in the UI
    } else {
        alert('Please enter a name before adding.');
    }
});

// Handle "Select Random Facilitator" button click
document.getElementById('select-facilitator-btn').addEventListener('click', function () {
    if (facilitators.length > 0) {
        const randomFacilitator = randomMember(facilitators);
        document.getElementById('friend').textContent = randomFacilitator;
    } else {
        alert('No facilitators added yet. Please add some first.');
    }
});

