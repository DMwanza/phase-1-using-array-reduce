const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries=batteryBatches.reduce(function(batch,curr){
    return batch+=curr
})
// Code your solution here
