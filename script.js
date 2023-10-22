//CURSOR 
const root = document.querySelector('html');

// Real cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
root.appendChild(cursor);

// Following extra cursor element
const follower = document.createElement('div');
follower.classList.add('cursor', 'cursor__follower');
root.appendChild(follower);


root.addEventListener('mousemove', e => {
  setPosition(follower, e);
  setPosition(cursor, e);
});

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
}
// CALCULATOR // PROJECT-->1
let string = "";

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value = string;
    }
    else{
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})