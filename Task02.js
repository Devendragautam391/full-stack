let array = []
    while (true) {
      let number = prompt("Enter  numbers (or press enter to quit):")
      if (number === "") {
        break;
      }
      let num = parseFloat(number);
      array.push(num);
      array.sort((a, b) => b - a);
    }
let limit = Math.min(array.length, 5);
console.log("Five highest number are :");
for (let i = 0; i < limit; i++) {
  console.log(array[i]);
}


