function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let r = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

module.exports = shuffle