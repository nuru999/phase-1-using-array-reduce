// Sample batteryBatches array with batch sizes

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce() to calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
  return accumulator + currentBatch;
}, 0);

console.log(totalBatteries); // This will print the total number of batteries
