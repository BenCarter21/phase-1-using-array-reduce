const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function (accumulator, element) {
    return element + accumulator;
  }, 0);

  

// let totalBatteries = 0
// function batteries(){
//     for (const battery of batteryBatches) {
//         totalBatteries = batteryBatches.reduce(function (accumulator, element)){
//             return element + accumulator
//         }
//     }
//     return totalBatteries
// }
