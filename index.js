// Code your solutions in this file
function writeCards(array, eventName) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    debugger;
    output.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
  }
  return output;
}

function countDown(int) {
  while (int >= 0) {
    console.log(int);
    int--;
  }
}