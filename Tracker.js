let table = document.getElementById('table');

function deleteRow(button) {
    let row = button.closest('tr');
    let amount = parseInt(row.children[0].innerText);
    let type = row.children[1].innerText;

    let income = parseInt(document.getElementById('totalIncome').innerText);
    let expense = parseInt(document.getElementById('expense').innerText);
    let balance = parseInt(document.getElementById('balance').innerText);

    if (type === 'income') {
        document.getElementById('totalIncome').innerText = income - amount;
        document.getElementById('balance').innerText = balance - amount;
    } else if (type === 'expense') {
        document.getElementById('expense').innerText = expense - amount;
        document.getElementById('balance').innerText = balance + amount;
    }

    row.remove();
}

function addRow() {
    let date = document.querySelector('.dateInput').value;
    let amount = document.querySelector('.amountInput').value;
    let transactionType = document.querySelector('.transactionType').value;

    if (!date || !amount || transactionType === "Transaction Type") {
        alert("Please enter all fields.");
        return;
    }

    if (isNaN(amount) || parseInt(amount) <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    let row = document.createElement('tr');

    let amountCell = document.createElement('td');
    amountCell.innerText = amount;

    let transactionCell = document.createElement('td');
    transactionCell.innerText = transactionType;

    let dateCell = document.createElement('td');
    dateCell.innerText = date;

    let binCell = document.createElement('td');
    let deleteButton = document.createElement('button');
    let binImage = document.createElement('img');
    binImage.src = './images/recycle-bin.png';
    binImage.style.width = '25px';
    binImage.style.height = '25px';

    deleteButton.appendChild(binImage);
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function () {
        deleteRow(this);
    };

    binCell.appendChild(deleteButton);

    row.appendChild(amountCell);
    row.appendChild(transactionCell);
    row.appendChild(dateCell);
    row.appendChild(binCell);

    table.appendChild(row);

    let totalIncome = parseInt(document.getElementById('totalIncome').innerText);
    let totalExpense = parseInt(document.getElementById('expense').innerText);
    let balance = parseInt(document.getElementById('balance').innerText);

    if (transactionType === 'income') {
        document.getElementById('totalIncome').innerText = totalIncome + parseInt(amount);
        document.getElementById('balance').innerText = balance + parseInt(amount);
    } else if (transactionType === 'expense') {
        document.getElementById('expense').innerText = totalExpense + parseInt(amount);
        document.getElementById('balance').innerText = balance - parseInt(amount);
    }
}