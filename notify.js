let count = 7;
const unread = document.querySelectorAll('.notification-box-content-bg');
const countSpan = document.querySelector('.count');

function redDot() {
   var elements = document.getElementsByClassName('fa-sharp fa-solid fa-circle'); // get all elements
   for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
   }
}

function removeDots(elem) {
   const dot = elem.querySelector('#dot');
   dot.remove();
}

function read(elem) {
   const read = elem.querySelector('.title');
   read.style.color = 'rgb(147, 157, 174)';
}
function readAll() {
   var elements = document.getElementsByClassName('title'); // get all elements
   for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "rgb(147, 157, 174)";
   }
}

function Mcount(count) {
   countSpan.textContent = count;
}

unread.forEach(elem => {
   elem.addEventListener('click', () => {
      elem.classList.remove('notification-box-content-bg');
      removeDots(elem);
      read(elem);
      count--;
      Mcount(count);
   })
})

function clicked() {
   var elements = document.getElementsByClassName('notification-box-content-bg'); // get all elements
   for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "white";
      countSpan.textContent = 0;
      readAll();
   }
   redDot();
}
