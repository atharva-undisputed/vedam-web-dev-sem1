let arr=[1,2,3,4,5];
let words=["i","am","a","sentence"];
arr.push(10);
console.log("length of arr" , arr.length);
console.log("arr",arr);

// remove last element arr.pop

arr.pop();
console.log("length of arr",arr.length);
console.log("arr",arr);

arr.unshift(11);
console.log("arr",arr);

arr.shift(12);
console.log("arr",arr);

Array.sort(arr);
console.log("arr",arr);