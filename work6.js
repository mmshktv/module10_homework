let arr = [1, '2', 8, 10]
x = typeof(arr[0]);
arr.every(element=>typeof(element)==x);
console.log(arr.every(element=>typeof(element)==x))