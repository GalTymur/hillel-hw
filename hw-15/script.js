"use strict";

const table = document.getElementById("myTable");
for (let i = 0; i < 10; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 10; j++) {
    const cell = row.insertCell();
    cell.innerText = i * 10 + j + 1;
  }
}

