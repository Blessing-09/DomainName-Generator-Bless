import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let domain = document.getElementById("domain");
let btn = document.querySelector(".btn");


let pronoun = ['my', 'the'];
let adj = ['cool', 'main'];
let noun = ['website', 'page'];
let site = ['.com', '.es'];

function generateRandomDomain(arr) {
  return arr.sort(() => Math.random() - 0.5); // Properly shuffle the array
}



function generateText() {
let randomPronoun = generateRandomDomain([...pronoun]).slice(0, pronoun.length); 
console.log(randomPronoun); // THIS METHOD ALLOWS FOR THE ARRAY TO HAVE ANY NUMBER OF ELEMENTS AND AVOID UNNECCESSARY REPETITION 
let randomAdj = generateRandomDomain([...adj]).slice(0, adj.length); 
let randomNoun = generateRandomDomain([...noun]).slice(0, noun.length); 
let randomSite = generateRandomDomain([...site]).slice(0, site.length); 

  let combination = [];
  for (let i = 0; i < randomPronoun.length; i++) {
    for (let j = 0; j < randomAdj.length; j++) {
      for (let k = 0; k < randomNoun.length; k++) {
        for (let l = 0; l < randomSite.length; l++) {
       combination.push(`<li>www.${randomPronoun[i]}${randomAdj[j]}${randomNoun[k]}${randomSite[l]} ⩤</li>`);
      }
    }
  }
}
  return combination.join('');
}

window.onload = function() {
  //write your code here
  btn.innerHTML = "<em>GENERATE</em> <span>🥁</span";
  
  btn.addEventListener("click", function() {
    domain.innerHTML = generateText();
    btn.innerHTML = "<em>GENERATE</em> <span>🔁</span";
    
  });
};


// THIS WAS MY FIRST ATTEMPT BEFORE INCLUDING THE VARIABLES IN THE generateText () FUNCTION...
// ...IT WORKED BUT WASN´T OPTIMAL AS I HAD TO REPEAT THE CODE FOR EACH VARIABLE AND FOR EACH ELEMENT OF THE ARRAYS.
// function generateRandomDomain(arr) {
//   let randomDomainName = Math.floor(Math.random() * arr.length);
//   return arr[randomDomainName];
// }
// let randomPronoun = [generateRandomDomain(pronoun), generateRandomDomain(pronoun)];
// console.log(randomPronoun);
// let randomAdj = [generateRandomDomain(adj), generateRandomDomain(adj)];
// let randomNoun = [generateRandomDomain(noun), generateRandomDomain(noun)];
// let randomSite = [generateRandomDomain(site), generateRandomDomain(site)];