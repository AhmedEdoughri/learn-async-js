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

async function sum2DArrayConcurrently(array2D) {
  try {
    const promises = array2D.map((row) =>
      sumRow(row).catch((error) => {
        console.error("Error summing row:", error);
        return 0;
      })
    );

    const rowSums = await Promise.all(promises);
    const totalSum = rowSums.reduce((total, current) => total + current, 0);
    return totalSum;
  } catch (error) {
    console.error("An error occurred while summing the 2D array:", error);
    throw error;
  }
}

(async () => {
  try {
    const totalSum = await sum2DArrayConcurrently(array2D);
    console.log("Total Sum:", totalSum);
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
