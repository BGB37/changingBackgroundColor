 let btn = document.getElementById("btn");

 function random (number)  {
 return Math.floor(Math.random() * (number + 1));  // Maksimum 255 olacak şekilde rasgele bir sayı üretiyoruz.
  }

function changeColor() {
  const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;  // I didn't realize that i should be using backticks so it took my one hour away from me. Note: Always be sure by checking the color of the code if it's accepted as a string or something else.
  console.log(color);
  document.body.style.backgroundColor =  color;
}

function changeBtnColor() {
  const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;  // I didn't realize that i should be using backticks so it took my one hour away from me. Note: Always be sure by checking the color of the code if it's accepted as a string or something else.
  console.log(color);
  btn.style.backgroundColor =  color;
}

function changeBtnLocation () {
  const newLocation = `${random(50)}px`;
  btn.style.marginTop = newLocation;
  btn.style.marginLeft = `${random(200)}px`;
  btn.style.marginRight = `${random(150)}px`;
  btn.style.marginBottom= `${random(300)}px`;
};

btn.addEventListener('click', changeColor);
btn.addEventListener('click', changeBtnColor);
btn.addEventListener('click', changeBtnLocation);

console.log(random(36));  // Buraya kadar sıkıntı yok.



// const btn = document.querySelector('button');

// function random(number) {
//   return Math.floor(Math.random() * (number+1));
// }

// btn.addEventListener('click', () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });