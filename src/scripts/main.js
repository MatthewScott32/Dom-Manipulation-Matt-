const headerOne = document.querySelector(".article__header");
console.log(headerOne);

headerOne.textContent = 'Welcome to the Matt blog';
console.log(headerOne);

const headerTwo = document.querySelectorAll(".article__header");
console.log(headerTwo);

for (let i = 0; i < headerTwo.length; i++) {
    headerTwo[i].classList.add("important");
  }

const classDashed = document.querySelector(".dashed")
classDashed.classList.remove("dashed")
console.log(classDashed);

const classGoldenRod = document.querySelector('.article__footer')
classGoldenRod.classList.add('goldenrod');
console.log(classGoldenRod);