const headerOne = document.querySelector(".article__header");
console.log(headerOne);

headerOne.textContent = 'Welcome to the Matt blog';
console.log(headerOne);

const headerTwo = document.querySelectorAll(".article__header");
headerTwo.classList.remove(".article__header");
headerTwo.classList.add(".article__header important");
console.log(headerTwo);