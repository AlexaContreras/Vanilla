/*
===========================================================================================================================

==================================
Vanilla JS \ CLONES
==================================

1
Create a function that stacks n clones behind the a target element.
This function should create and append each clone behind the target, while assigning a background color following
the order of a static array of colors.

2
Clones will be displayed when the user clicks the main container.
Once the click is fired, clones should move down stacking one below the other on a single column.
A video reference is provided with the desired behaviour.


RULES:
- HTML should NOT be edited.
- LIBRARIES ARE NOT ALLOWED. Only good old js.
- Clones amount is an integer value.
- Color array can have any number of colors declared.
- Color order must be followed.


Tips:
- Use the video as reference, it's just more simple to understand.
- JS and CSS are both aviliable to edit, use it!
- If you have questions related to the challenge, just ask.

===========================================================================================================================
 */

// Deleting this line = cheating.
'use strict';

const palette = ['F38785', 'C9CBA6', 'EA4A66'];
const margin = 10;

var container;
var elems;
var box;

var isOpen = false;

/**
 * Create n clones and append the behind the target element.
 * @param {HTML Element} target
 * @param {int} numberOfClones
 */
function createOffsetClones(target, numberOfClones) {
  let createdElements = [];
  let counter = 0;

  for (let index = 0; index < numberOfClones; index++) {
    //cloning the target
    const element = target;
    const cloned = element.cloneNode(true);

    //Setting counter to style de background

    if (index <= 2) {
      counter = index;
    } else {
      if (counter == 2) {
        counter = 0;
      } else {
        counter++;
      }
    }

    //styling clones
    cloned.style.backgroundColor = `#${palette[counter]}`;
    cloned.style.zIndex = `${numberOfClones - 1}`;

    // adding clone to createdElements array
    createdElements.push(cloned);
  }

  return createdElements;
}

/**
 * The function to execute when the container is clicked. This should trigger the transition of the clones!
 * @param {MouseEvent} event
 */

// container element reference. This should be clicked.
container = document.querySelector('.container');
// box element reference. This should be cloned.
box = document.querySelector('.box');

// calling the function to create clones
elems = createOffsetClones(box, 12);
elems.forEach((element) => {
  // elements added to container
  container.appendChild(element);
});

// container click function
function click(e) {
  let index = 152;

  if (isOpen) {
    // styles to close clones
    elems.forEach((element) => {
      element.style.transform = null;
      element.style.marginTop = null;
    });
    isOpen = false;
  } else {
    // styles to open clones
    elems.forEach((element) => {
      element.style.transform = `translateY(${index}px)`;
      element.style.marginTop = `${margin}px`;

      index = index + 162;
    });

    isOpen = true;
  }
}

// adding event listener to container

container.addEventListener('click', click);
