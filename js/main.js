const counterUp = (item) => {
  let countStart = 0;
  let countEnd = item.innerText;
  if (countEnd > countStart) {
    increment = countStart++;
  }
  let current = countStart;
  const interval = setInterval(() => {
    current += 1;
    item.innerText = current;
    if (current >= countEnd) {
      item.innerText = countEnd;
      clearInterval(interval);
    }
  }, 10);
};
document.querySelectorAll(".timer").forEach((item) => {
  counterUp(item);
});

// counter up multilple create dynamically
let counterTimer = document.querySelectorAll(".count");
let newArray = Array.from(counterTimer);
// console.log(newArray[0].dataset.count); // set attribute er maddome dynamically kora jay
// console.log(newArray[0].dataset.number);
// console.log(newArray[1].dataset.number); //attribute ke dorar jonno dataset.propertyname dite hoy kintu attribute use kora age element ta tarpor dataset and property name dite hoy
newArray.map((item) => {
  let counter = 0;
  const counterGrade = () => {
    item.innerHTML = counter++;
    if (counter > item.dataset.number) {
      clearInterval(interval);
    }
  };
  const interval = setInterval(() => {
    counterGrade();
  }, item.dataset.count);
});

// javascript event handler

let title = document.querySelector(".title");
let btn = document.querySelector(".btnClick");

btn.addEventListener("click", (e) => {
  title.innerHTML = "Javascript programming language";
  console.log(e);
  console.log(e.pointerId);
  console.log(e.timeStamp);
  console.log(e.target); // e mane event er short name target dile html element ta ber kore ane
});
