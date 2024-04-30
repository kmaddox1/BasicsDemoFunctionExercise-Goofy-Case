// goofy-case = first and last character capitalized
// ex: ("I like to CODE") ➞ "i lIkE tO cOdE"
// ex: Kimberly Maddox ➞ "kImBeRlY MaDDoX"

function goofyCase(text){
  // take the text that was input and turn it to goofy case
  // output the goofy-cased string
  let firstLetter = text[0].toUpperCase();
  //console.log(firstLetter);
  //let middle = text.slice(1, text.length-1).toLowerCase();
  let middle = text.slice(1, text.length-1).toLowerCase();
  //console.log(middle);
  //let lastLetter = text[text.length-1].toUpperCase();
  let lastLetter= text[text.length-1]. toUpperCase();
  //console.log(lastLetter);

  return firstLetter+middle+lastLetter;
}

// Test it out:
//goofyCase("Mustard")
/*let goofyCaser = goofyCase("Mustard");
console.log(goofyCaser)*/

let input = prompt("Enter some text");
let result = goofyCase(input);
console.log(result);