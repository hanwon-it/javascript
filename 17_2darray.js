let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]);
console.log(matrix[2][0]);
console.log(matrix[2][2]);

console.log("------------");
for (let i = 0; i < matrix.length; i++) {
  for (j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

console.log("----------");

let menuBoard = [
  ["버거1", "핫도그1", "콜라1"],
  ["버거2", "버거2", "콜라2"],
  ["버거3", "핫도그3", "콜라3"],
];

for (let row = 0; row < menuBoard.length; row++) {
  let line = "";
  for (let col = 0; col < menuBoard[row].length; col++) {
    line += menuBoard[row][col] + "\t";
  }
  console.log(line);
}

/*
    버거1  핫도그1  콜라1
    버거2  버거2    콜라2
    버거3  핫도그3  콜라3
*/
