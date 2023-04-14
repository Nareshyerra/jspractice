let parael = document.getElementById("para");
let inputel = document.getElementById("input");
let btnel = document.getElementById("btn");
let submitbtn = document.getElementById("submit")
let text = document.getElementById("textarea")

let buttonel = document.getElementById("button")

let textparael = document.getElementById("textpara")
buttonel.onclick = function() {
    parael.textContent = `Hi ${inputel.value} welcome to softpath`;
    
}

submitbtn.onclick = function(){
textparael.textContent= `${text.value}`;


}
textparael.style.color= "Yellow";





