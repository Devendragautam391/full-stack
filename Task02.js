const inches = parseFloat(prompt('Enter length in inches:'))
while (inches > 0) {
  centimeters = inches*2.54
  alert(`${inches.toFixed(2)} inches = ${centimeters.toFixed(2)} centimeters`)
  break;
}
