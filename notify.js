// function clicked() {
//    const a = document.getElementsByClassName('notification-box-2').style.background;
//    if (
//     onclick = true
//    ){
//     a = 'white';
//    }
// };
// const mar = document.getElementById('notification-box-2');

// btn.addEventListener('click', function onClick(event) {
//    // 👇️ change background color
//    document.body.style.backgroundColor = 'white';

//    // 👇️ optionally change text color
//    // document.body.style.color = 'white';
// });


// function changeColor(color) {
//    document.getElementsByClassName('notification-box-content').style.background = color;
// }

// function click() {
//    changeColor('white');
// }
let count = 7;
const unread = document.querySelectorAll('.notification-box-content');
const countSpan = document.querySelector('.count');

function redDot() {
   var elements = document.getElementsByClassName('fa-sharp fa-solid fa-circle'); // get all elements
   for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
   }
}

function removeDots(elem) {
   const dot = elem.querySelector('#dotg');
   dot.remove();
}

function Mcount(count) {
   countSpan.textContent = count;
}

unread.forEach(elem => {
   elem.addEventListener('click', () => {
      elem.classList.remove('notfication-box-content');
      removeDots(elem);
      count--;
      Mcount(count);
   })
})

function clicked() {
   var elements = document.getElementsByClassName('notification-box-content'); // get all elements
   for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = "white";
      countSpan.textContent = 0;
   }
   redDot();
}
