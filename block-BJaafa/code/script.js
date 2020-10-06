let name = document.querySelector('#software-name');
let link = document.querySelector('#software-link');
let des = document.querySelector('#software-des');
let randomgen = document.querySelector('#random-generate');

let software = document.querySelector(".Software");
let description = document.querySelector(".description");
let randomGenerate = document.querySelector(".random-software-generate");
let download = document.querySelector(".website")
let user = document.querySelector("#user");
let swap = document.querySelector(".swap");
let normal = document.querySelector(".normal");
let intro = document.querySelector(".intro");

let logo = document.querySelector(".logo");

function RandomSoftware(arr){
   return (Math.floor(Math.random() * list.length)+1);
}
function CreateUi(){
let software = list[RandomSoftware()];
  name.innerText = software.name.split('-')[0];
  des.innerText = software.description;
  link.href = software.Download;
  console.log(software.Download)
 }

CreateUi();

randomgen.addEventListener('click', CreateUi);


let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");



function darkMode(){
   body.style.backgroundColor = "#161212";
  name.style.color = "white";
  des.style.color = "white";
  randomgen.style.color = "white";
user.style.color = "white";
   software.classList.add("mode");
   description.classList.add("mode");
   download.classList.add("mode");
   link.style.color="white";
   randomGenerate.classList.add("mode");
   swap.style.display = "none";
   normal.style.display = "block";
  logo.classList.add("mode");
   intro.style.color = "white";
  
 
   // toggle.classList.add("mode");
   // toggle.style.color = "white";
   
   
   
}

toggle.addEventListener("click",darkMode);

function normalMode(){
   body.style.background = "none";
   name.style.color = "black";
   des.style.color = "black";
   randomgen.style.color = "black";
   user.style.color = "black";
   software.classList.remove("mode");
   software.style.color = "black";
   description.classList.remove("mode");
   download.classList.remove("mode");
   link.style.color="black";
   randomGenerate.classList.remove("mode");
   normal.style.display = "none";
   swap.style.display="block";
   intro.style.color = "black";
   logo.classList.remove("mode");
   
  
  
 
   
   
   
}


normal.addEventListener("click",normalMode);


