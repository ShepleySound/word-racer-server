function getRandomElement(array) {
  if (array) {
    const randomNum = (Math.floor(Math.random() * array.length));
    return array[randomNum];
  }
}

module.exports = getRandomElement;