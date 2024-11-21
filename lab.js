let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna']
characters.forEach(element => { console.log(element)});  



let firstName = "Harry"; 
let house = "griffindor"
let greeting = `Welcome, ${firstName} of ${house}!`;
console.log(greeting); 


let characterName = "Hermione";
console.log( characterName.toUpperCase());

console.log( characterName.toLowerCase());



let spell = " Expelliarmus ";
console.log(`"${spell.trim()}"`);




quote = "I solemnly swear that I am up to no good.";
console.log(quote.slice(10, 16));



let firstNAME = "Ron";
let lastNAME = " Weasley";
let combined = firstNAME.concat(lastNAME);
console.log(combined);
 



sentence = 'Draco is a good wizard.';
let replacedStr = sentence.replace("good", "bad");
console.log(replacedStr);

let HOUSES = ['Griffindor', 'Hufflepuff', 'Ravenclaw'];
HOUSES.push('Slytherin');
console.log("After push(4, 5):", HOUSES);

let lastElement = HOUSES.pop();
console.log("After pop():", HOUSES);



let SPELL = ['Alohomora', 'Lumos', 'Nox'];
// unshift() example (add elements to the beginning)
SPELL.unshift('Accio');
// arr.unshift(100,200,300); you can multiple elements
console.log(SPELL);
//output:
//After unshift(100):[100, 1, 2, 3, 4]
// shift() example (remove the first element, one at a time)
let firstElement = SPELL.shift();
console.log(SPELL);


