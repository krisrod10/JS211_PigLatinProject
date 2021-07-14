'use strict';




function pigLatin(str){
  let vowels ="AEIOUaeiou";
  let pigged = "";

  for (let i = 0; i < str.length; i++){
      if (vowels.includes(str[0])){
          pigged = str + "yay";
      }else if (vowels.includes(str[i])){
          let part1 = str.slice(0, i);
          let part2 = str.slice(i);
          pigged = part2 + part1 + "ay";
          break;
      }
  }
  return pigged;
}
console.log(pigLatin("create"));
console.log(pigLatin("car"));
console.log(pigLatin("dog"));
console.log(pigLatin("valley"));
console.log(pigLatin("emission"));
console.log(pigLatin("hello"));
console.log(pigLatin("rocket"));
console.log(pigLatin("egg"));

let button = document.getElementById("inputButton");
button.addEventListener("click", function(){
  console.log("button clicked")

  let input = document.getElementById("inputBox");
  let text = input.value;
  console.log("item to add", text);
  console.log(typeof(text)) 
 let translated = pigLatin(text);
 
let li = document.createElement("li");

let ul = document.getElementById("Translater");
ul.appendChild(li);

li.innerText = translated;
input.value = '';
})

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C


// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C







// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
