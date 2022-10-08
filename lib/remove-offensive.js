// A small script used to remove offensive words from words.json using an array of words from offensive.json
// Does not necessarily need to be offensive words. Can filter using any list.
// Just create a file with a JSON array called offensive.json and fill it with the words you want to filter out from the main list!

const words = require('./words.json');
const offensive = require('./offensive.json');

const fs = require('fs');

let counter = 0;
const newWords = words.filter(word => {
  const doesInclude = offensive.includes(word);
  if (doesInclude) {
    counter++;
    console.log(`Found ${counter} offensive words. ${word} removed.`);
  }
  return !doesInclude;
});


let data = JSON.stringify(newWords);
fs.writeFileSync('filtered-words.json', data);