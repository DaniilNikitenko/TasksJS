const getClick = () => {
  // получить элемент
  let table = document.body.firstElementChild;

  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    row.cells[i].style.backgroundColor = "green";
  }
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    let index = row.cells.length - 1 - i;
    row.cells[index].style.backgroundColor = "blue";
  }
};
