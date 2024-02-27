function checkForNegative(row, rowIndex) {
  return new Promise((resolve, reject) => {
    const hasNegative = row.some((val) => val < 0);
    if (hasNegative) {
      resolve({ message: "Evidence found", row: row, rowIndex: rowIndex + 1 });
    } else {
      reject(`Row ${rowIndex + 1} does not contain a negative number.`);
    }
  });
}

const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const promises = array2D.map((row, index) => checkForNegative(row, index));

Promise.any(promises)
  .then((result) => {
    console.log(
      result.message + " in row " + result.rowIndex + ": ",
      result.row
    );
  })
  .catch((error) => {
    console.log(
      "All promises are rejected, no negative numbers found in any row."
    );
  });
