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