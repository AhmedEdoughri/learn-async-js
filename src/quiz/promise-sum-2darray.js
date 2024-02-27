const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumRow(row) {
  return new Promise((resolve) => {
    let sum = row.reduce((acc, val) => acc + val, 0);
    resolve(sum);
  });
}

function sum2DArrayConcurrently(array2D) {
  const promises = array2D.map((row) =>
    sumRow(row).catch((error) => {
      console.error("Error summing row:", error);
      return 0;
    })
  );

  return Promise.all(promises)
    .then((rowSums) =>
      rowSums.reduce((totalSum, rowSum) => totalSum + rowSum, 0)
    )
    .catch((error) => {
      console.error("An error occurred while summing the 2D array:", error);
    });
}

sum2DArrayConcurrently(array2D)
  .then((totalSum) => {
    console.log("Total Sum:", totalSum);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
