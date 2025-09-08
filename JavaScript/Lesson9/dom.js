document.body.children[0];
console.log(document.body.children[0]);
console.log(document.body.children[1]);
console.log(document.body.children[1].children[1].innerText);

let table = document.body.children[3].tBodies[0];

console.log(table)

for (let row of table.rows) {
  console.log(row.cells[0].innerText);
}

for(let i = 0; i < table.rows.length; i++) {
  for (let j = 0; j < table.rows[i].cells.length; j++) {
    if (j == i) {
      table.rows[i].cells[j].style.backgroundColor = 'red';
      table.rows[i].cells[j].style.color = 'white';
      table.rows[4].cells[j].style.backgroundColor = '#45eeaa';
      table.rows[i].cells[j].innerText = 'X';
      // table.rows[i].cells[j].hidden = true;

    }
  }
}

table.rows[0].style.backgroundColor = 'yellow';




