// Helpful Resources:
// https://www.w3schools.com/js/js_htmldom.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

/*****************************
 * Section 1 - Personal Info *
 *****************************
 *
 * Description:
 *   Change the code below to display some (static) information
 *   when a user clicks the "Show Info" button.
 *
 * Resources:
 *   (See below for drill-specific resources)
 */

function addName() {
  console.log('addName() ran');

  // See:
  // - https://www.digitalocean.com/community/tutorials/js-innertext-and-innerhtml
  // - https://www.w3schools.com/jsref/prop_node_innertext.asp

  let nameElement = document.querySelector('#name');
  nameElement.innerText = 'Jesse Farmer';
  nameElement.style.color = 'red';
}

function addFavoriteThings() {
  console.log('Called addFavoriteThings()');

  // 1. Get a reference to <ul id="favthings">
  // 2. Create a few list items representing your favorite things
  // 3. Add them to append them to favthings

  // See:
  //   - https://htmldog.com/guides/javascript/advanced/creatingelements/
  //   - https://www.javascripttutorial.net/javascript-dom/javascript-createelement/
  //   - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

  let dogsListItem = document.createElement('li');
  dogsListItem.innerText = 'Dogs';

  let ninListItem = document.createElement('li');
  ninListItem.innerText = 'Nine Inch Nails';

  let pizzaListItem = document.createElement('li');
  pizzaListItem.innerText = 'Chicago-style Pizza';

  let favThingsList = document.querySelector('#favthings');

  favThingsList.appendChild(dogsListItem);
  favThingsList.appendChild(ninListItem);
  favThingsList.appendChild(pizzaListItem);
}

function replaceImage() {
  console.log('Called replaceImage()');

  // Change the puppy picture to a picture of your choosing

  // See:
  // - https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-get-set-attributes.php
  // - https://www.w3schools.com/jsref/met_element_setattribute.asp

  let doggoBeGone = document.querySelector('#picture');
  doggoBeGone.src = 'https://pbs.twimg.com/media/Ec2Y0gVU8AMim1a?format=png&name=medium';
}

function changeCodeStatus() {
  console.log('Called changeCodeStatus()');
  let codeStatusElement = document.querySelector('#codestatus');

  codeStatusElement.innerText = '';

  let memeTime = document.createElement('img');
  memeTime.src = 'https://i.pinimg.com/originals/33/fb/06/33fb067593a2a949e349a4e899c508d3.webp';
  memeTime.height = '300';
  memeTime.style.border = '1px solid black;'
  codeStatusElement.appendChild(memeTime);
}

// Get a reference to the button w/ id="show-info-button"
let showInfoButton = document.querySelector('#show-info-button');

// Do something when showInfoButton is clicke
showInfoButton.addEventListener('click', function() {
  console.log('Clicked "Show Info" button');

  // Implement addName, addFavoriteThings, replaceImage, changeCodeStatus above

  addName();
  addFavoriteThings();
  replaceImage();
  changeCodeStatus();
});

/**********************************
 * Section 2 - Reading From Forms *
 **********************************
 *
 * Description:
 *   Change the code below to populate the section on the right-hand
 *   side of the page with the data entered into the form.
 *
 */

// Get a reference to form w/ id="information-form"
let informationForm = document.querySelector('#information-form');

// Do something when form is submitted
informationForm.addEventListener('submit', function(event) {
  let inputElement;
  let outputElement;

  event.preventDefault(); // You will want this here. Remove it and see what changes.

  inputElement = document.querySelector('#fname');
  outputElement = document.querySelector('#firstname');
  outputElement.style.color = 'red';
  outputElement.innerText = inputElement.value;

  inputElement = document.querySelector('#lname');
  outputElement = document.querySelector('#lastname');
  outputElement.style.color = 'red';
  outputElement.innerText = inputElement.value;

  inputElement = document.querySelector('#cars');
  outputElement = document.querySelector('#chosencar');
  outputElement.style.color = 'red';
  outputElement.innerText = inputElement.value;

  inputElement = document.querySelector('input[name=icecream]:checked');
  outputElement = document.querySelector('#icecreamstatus');
  outputElement.style.color = 'red';
  outputElement.innerText = inputElement.value;

  let humanCheck = document.querySelector('#humancheck');
  let coderCheck = document.querySelector('#codercheck');
  let checkMessage = '';
  let separator = '';

  // If both are checked, separate with ', '
  // If only 1 is checked, separate with ''
  if (humanCheck.checked && coderCheck.checked) {
    separator = ', ';
  }

  if (humanCheck.checked) {
    checkMessage = 'Human';
  }

  if (coderCheck.checked) {
    checkMessage = checkMessage + separator + 'Coder';
  }

  let checkSection = document.querySelector('#checks');
  checkSection.style.color = 'green';
  checkSection.innerText = checkMessage;
});

/*************************************
 * Section 3 - Clicks and Keypresses *
 *************************************
 *
 * Description:
 *   Make the buttons in section 3 of index.html behave as described below.
 *
 */

// When a user clicks "Click me to log something to the console"
// then log something to the console

// Fill in ________ to get a reference to the correct button on the page
let consoleLogButton = document.querySelector('#console-log-button');

// Log something when that button is clicked
consoleLogButton.addEventListener('click', function() {
  console.log('Change this text if you want!');
});

let makeBlueButton = document.querySelector('#make-blue-button');
makeBlueButton.addEventListener('click', function() {
  // Your job:
  //  1. When a user clicks "Change the text to the right blue"
  //  2. Change the text in <div id="colorText">...</div> to blue
});

// Adding an event listener to document means the "keydown" event
// can happen anywhere on the page and we'll respond.
document.addEventListener('keydown', function() {
  // This is called whenever a user pressed any key.

  // Your job:
  //  1. Turn colorText red whenever a user presses the 'r' key
  //  2. Add your own keybind somewhere

  // See:
  // - https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
  // - https://javascript.info/keyboard-events
});

/*************************************
 * Section 4 - TODO List             *
 *************************************
 *
 * Description:
 *   Build a simple TODO list.
 *
 *   For this you will need to have a listener on the submit form and add
 *   anything entered into the text box to the to do list on the right side.
 *
 * Bonus:
 *   Add a delete button next to each item and allow it to delete the item
 *   it is next to.
 */

// Your code goes here

/****************************************
 * Section 5 - setInterval + setTimeout *
 ****************************************
 *
 * Description:
 *   Use the setInterval function to create a counter that counts every
 *   second on the page (Should look kind of like a stopwatch counting up).
 *   Display this in the span with the id of 'seconds'.
 *
 *   Then use the SetTimeout function to display something (your choice) to the
 *   div with the id 'delayedDisplay' after 5 seconds have passed.
 *
 * Resources:
 *   - https://javascript.info/settimeout-setinterval
 *
 */

// Current time in miliseconds since Jan. 1, 1970 12AM GMT
let startTime = Date.now();

setInterval(function() {
  let currentTime = Date.now();
  let diffInSeconds = (currentTime - startTime) / 1000;

  let secondsOutput = document.querySelector('#seconds');

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  secondsOutput.innerText = diffInSeconds.toFixed(1);
}, 20);

/****************************************
 * Section 6 - Your own section!        *
 ****************************************
 *
 * Description:
 *   Add your own section to this page with its own event listeners.
 *   Use a JavaScript event listener that is new to you.
 *   Here is a handy list: https://developer.mozilla.org/en-US/docs/Web/Events
 *   Click on each event listener to see an example of how it is used
 *
 */

// Your code goes here
