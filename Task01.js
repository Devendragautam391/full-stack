 num_dice = prompt("How many dices would you like to roll?");
 let total = 0;
 for (let i = 0; i < num_dice; i++) {
  let roll = Math.floor(Math.random() * 6) + 1;
  total += roll;
  alert("The total sum of the dices roll is:" +total);
 }
