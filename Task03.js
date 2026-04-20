let number = prompt("Enter a number (or press enter to stop) :")
let Smallest  = parseFloat(number)
let Largest = parseFloat(number)
while (true) {
  let number = prompt("Enter another number (or press enter to stop) :")
  if (number === "") {
    break;
  }
  let num = parseFloat(number)
  if (num < Smallest) {
    Smallest = num;
  }if (num > Largest) {
    Largest = num;
  }
}
alert("Smallest number: " + Smallest.toFixed(2) + "\nLargest number: " + Largest.toFixed(2));
