'use strict';

let elements = document.querySelectorAll('.ulClass > li');
let arr = [];
  for (let elem of elements) {
    console.log(elem.innerHTML); // output elements
    arr.push(elem.innerHTML); //pushing array
  }
  console.log(`Count of li-elements on page: ${elements.length}`)
  console.log(arr);

  