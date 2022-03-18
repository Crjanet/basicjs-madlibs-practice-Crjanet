// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// Create your own Madlibs story!

let animal = prompt("Name a kind of animal (singular):");
let place = prompt("Name a place:");
let food = prompt("Name a food (plural):");

document.write("Here is a story for you!<br>");
document.write(
  "The giant "
  + animal
  + " walked proudly through "
  + place
  + ", dropping "
  + food
  + " everywhere.<br>"
);

let where = prompt("Name a place:");
let mammal = prompt("Name a kind of animal (plural):");
let edible = prompt("Name a food (plural):");

document.write("Here is another funny story for you!<br>");
document.write(
  "For many years, "
  + where
  + " was ruled by the terrifying "
  + mammal
  + ". All that changed the day we discovered "
  + edible
  + ".<br>"
);

let coldBlooded = prompt("Name a kind of animal (singular):");
let comida = prompt("Name a food (plural):");
let lugar = prompt("Name a place:");

document.write("One More funny story before you leave!<br>");
document.write(
  "You probably shouldn't get married to that "
  + coldBlooded
  + ". You'll spend the rest of your life eating "
  + comida
  + " in the middle of "
  + lugar
  + ".<br>"
);
