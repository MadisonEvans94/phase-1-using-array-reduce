const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
totalBatteries = batteryBatches;
const reducer = (inputArray, agg = 0) => {
  inputArray.forEach((value) => {
    agg += value;
  });
  return agg;
};
