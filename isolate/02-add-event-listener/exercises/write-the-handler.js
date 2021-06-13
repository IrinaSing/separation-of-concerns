'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));


const truthTestHandler = () => {
  // ask a user to confirm if they are honest
  let confirmed = false;
  confirmed = confirm('are you honest?');
  // let them know what you think of their answer
  if (confirmed) {
    alert('thank you')
  } else {
    alert('i am disappointed')
  }

};

buttonEl.addEventListener('click', truthTestHandler);


// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
