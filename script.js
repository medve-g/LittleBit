//Variables for the page parts
let firstContentSection = document.getElementById("firstDiv");
let secondContentSection = document.getElementById("secondDiv");
let thirdContentSection = document.getElementById("thirdDiv");
let fourthContentSection = document.getElementById("fourthDiv");

//Scrolling into view behavior for header elements
document.getElementById("navOpt1").addEventListener("click", function(){
    firstContentSection.scrollIntoView({ behavior: "smooth" , block: "end"});
});

document.getElementById("navOpt2").addEventListener("click", function(){
    secondContentSection.scrollIntoView({ behavior: "smooth" , block: "end"});
});

document.getElementById("navOpt3").addEventListener("click", function(){
    thirdContentSection.scrollIntoView({ behavior: "smooth" , block: "start"});
});

document.getElementById("navOpt4").addEventListener("click", function(){
    fourthContentSection.scrollIntoView({ behavior: "smooth" , block: "end"});
});

//scrolling transition trigger for header
const headerElement = document.querySelector('.header');
const firstSection = document.querySelector('.firstContentSection');

const observerForFirstContentSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            headerElement.classList.remove('headerOutOfView');
        }else{
            headerElement.classList.add('headerOutOfView');
        }
    })
},{
    threshold: 0.8,
})

observerForFirstContentSection.observe(firstSection)

//number changing code
const numberHolder = document.querySelector('.numberHolder');
let currentNumber;
if(localStorage.getItem("currentNumber") == null){
    currentNumber = 2352;
}else{
    currentNumber = localStorage.getItem("currentNumber");
}

function updateCounter() {
  const randomValue = Math.floor(Math.random() * (9 - 1 + 1)) + 1;;
  addOneWithDelay(randomValue);
  setTimeout(updateCounter, Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000);
}

function addOneWithDelay(times) {
  for (let i = 0; i < times; i++) {
    setTimeout(() => {
      currentNumber++;
      numberHolder.innerHTML = currentNumber;
      localStorage.setItem("currentNumber", currentNumber)
    }, (i + 1) * 100);
  }
}

setTimeout(5000);
updateCounter();

//Scrolling into view behavior for references
const hiddenDivs = document.querySelectorAll('.hiddenDiv')

const observerForSecondContentSection = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.remove('hiddenDiv');
            console.log("latom")
        }
    })
},{
    threshold: 1,
})

hiddenDivs.forEach((el) => observerForSecondContentSection.observe(el));
