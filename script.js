const container = document.querySelector('body');
const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

const headerthree = document.createElement('h3');
headerthree.textContent = "I'm a blue h3!";
headerthree.style.color = 'blue';
container.appendChild(headerthree);

const div =  document.createElement('div');
div.style.backgroundColor = 'pink';
div.style.borderColor = 'black';
container.appendChild(div);

const containerone = document.querySelector('div');
const headerone = document.createElement('h1');
headerone.textContent = "I'm in a div!";
containerone.appendChild(headerone);

const paragraphone = document.createElement('p');
paragraphone.textContent =  "ME TOO!";
containerone.appendChild(paragraphone);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});