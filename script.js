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
    thirdContentSection.scrollIntoView({ behavior: "smooth" , block: "end"});
});

document.getElementById("navOpt4").addEventListener("click", function(){
    fourthContentSection.scrollIntoView({ behavior: "smooth" , block: "end"});
});

//scrolling transition trigger for header
const headerElement = document.querySelector('.header');
const firstSection = document.querySelector('.firstContentSection');

const observer = new IntersectionObserver(entries => {
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

observer.observe(firstSection)