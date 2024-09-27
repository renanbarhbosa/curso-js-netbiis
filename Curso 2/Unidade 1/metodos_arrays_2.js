const arr = [1,2,3,4,5];

const subArray = arr.slice(1, 4);
console.log(subArray);
console.log(arr);

const removed = arr.splice(1, 3, 7, 8);
console.log(removed);
console.log(arr)
