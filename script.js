// Project 10: Text Manipulator
// JavaScript Concepts: Functions, DOM Manipulation, String Methods

// Get DOM elements
const textInput = document.getElementById('text-input');
const displayText = document.getElementById('display-text');
const uppercaseBtn = document.getElementById('uppercase-btn');
const lowercaseBtn = document.getElementById('lowercase-btn');
const capitalizeBtn = document.getElementById('capitalize-btn');
const colorRedBtn = document.getElementById('color-red-btn');
const colorBlueBtn = document.getElementById('color-blue-btn');
const colorGreenBtn = document.getElementById('color-green-btn');
const biggerBtn = document.getElementById('bigger-btn');
const smallerBtn = document.getElementById('smaller-btn');
const resetBtn = document.getElementById('reset-btn');

// Variable to track font size
let currentFontSize = 24;

// Function to update display text from input
function updateDisplay() {
    displayText.textContent = textInput.value;
}

// Function to convert to uppercase
function makeUppercase() {
    displayText.textContent = displayText.textContent.toUpperCase();
    textInput.value = displayText.textContent;
}

// Function to convert to lowercase
function makeLowercase() {
    displayText.textContent = displayText.textContent.toLowerCase();
    textInput.value = displayText.textContent;
}

// Function to capitalize first letter
function capitalizeText() {
    const text = displayText.textContent;
    displayText.textContent = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    textInput.value = displayText.textContent;
}

// Function to change text color
function changeColor(color) {
    displayText.style.color = color;
}

// Function to increase font size
function increaseFontSize() {
    currentFontSize += 4;
    displayText.style.fontSize = currentFontSize + 'px';
}

// Function to decrease font size
function decreaseFontSize() {
    if (currentFontSize > 12) {
        currentFontSize -= 4;
        displayText.style.fontSize = currentFontSize + 'px';
    }
}

// Function to reset everything
function resetAll() {
    displayText.textContent = 'Hello World!';
    textInput.value = 'Hello World!';
    displayText.style.color = '#333';
    currentFontSize = 24;
    displayText.style.fontSize = currentFontSize + 'px';
}

// Event listeners for input
textInput.addEventListener('input', updateDisplay);

// Event listeners for buttons
uppercaseBtn.addEventListener('click', makeUppercase);
lowercaseBtn.addEventListener('click', makeLowercase);
capitalizeBtn.addEventListener('click', capitalizeText);
colorRedBtn.addEventListener('click', () => changeColor('#f44336'));
colorBlueBtn.addEventListener('click', () => changeColor('#2196f3'));
colorGreenBtn.addEventListener('click', () => changeColor('#4caf50'));
biggerBtn.addEventListener('click', increaseFontSize);
smallerBtn.addEventListener('click', decreaseFontSize);
resetBtn.addEventListener('click', resetAll);

// Initial update
updateDisplay();    