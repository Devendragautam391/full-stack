let balance = 0;
let keepRunning = true;

while (keepRunning) {
  let action = prompt("Choose an action: deposit, withdraw, check balance, exit").toLowerCase();

  switch (action) {
    case "deposit":
      let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
      if (depositAmount > 0) {
        balance += depositAmount;
        alert(`Deposited: ${depositAmount.toFixed(2)}\nNew balance: ${balance.toFixed(2)}`);
      }
      else {
        alert("Invalid amount. Please enter a positive number.");
      }
      break;

    case "withdraw":
      let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
      if (withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
          balance -= withdrawAmount;
          alert(`Withdrawn ${withdrawAmount.toFixed(2)}\nNew balance: ${balance.toFixed(2)}`);
        }
        else {
          alert("Insufficient funds!");
        }
      }
      else {
        alert("Invalid amount. Please enter a positive number.");
      }
      break;

    case "check balance":
      alert(`Your current balance is: ${balance.toFixed(2)}`);
      break;

    case "exit":
      alert("Thank you for using the Bank Manager!");
      keepRunning = false;
      break;

    default:
      alert("Invalid action. Please choose deposit, withdraw, check balance, or exit.");
  }
}
