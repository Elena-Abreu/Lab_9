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
SPELL.unshift('Accio');
console.log(SPELL);
let firstElement = SPELL.shift();
console.log(SPELL);
 

let Professors = ['Dumbledore', 'McGonnagall', 'Snape', 'Hagrid']
let slicedArr = Professors.slice(1, 3);
console.log("\nArray slice(1, 3):", slicedArr);

let Students = ['Neville', 'Seamus', 'Dean', 'Parvati']
Students.splice(1, 2, ); 
console.log( Students);


let phrase = ' Mischeif Managed ';
let combo = phrase.concat('-Harry'); 

console.log(`"${phrase.trim()}"`); 
console.log(phrase.toLowerCase()); 
console.log(combo);

