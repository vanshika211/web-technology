function deposit() {
    var amount = prompt("Enter deposit amount:");
    if (amount) {
      var balance = document.getElementById("balanceAmount");
      var currentBalance = parseFloat(balance.innerText.slice(1)); // Remove the $ sign and parse as float
      var newBalance = currentBalance + parseFloat(amount);
      balance.innerText = "$" + newBalance.toFixed(2); // Display with 2 decimal places
      var transactionList = document.getElementById("transactionList");
      var li = document.createElement("li");
      li.textContent = "Deposit $" + amount;
      transactionList.appendChild(li);
    }
  }
  
  function withdraw() {
    var amount = prompt("Enter withdrawal amount:");
    if (amount) {
      var balance = document.getElementById("balanceAmount");
      var currentBalance = parseFloat(balance.innerText.slice(1)); // Remove the $ sign and parse as float
      if (currentBalance >= parseFloat(amount)) {
        var newBalance = currentBalance - parseFloat(amount);
        balance.innerText = "$" + newBalance.toFixed(2); // Display with 2 decimal places
        var transactionList = document.getElementById("transactionList");
        var li = document.createElement("li");
        li.textContent = "Withdraw $" + amount;
        transactionList.appendChild(li);
      } else {
        alert("Insufficient funds!");
      }
    }
  }
  
  