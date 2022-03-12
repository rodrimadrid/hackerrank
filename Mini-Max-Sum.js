let arr = [2, 2, 2, 2, 2]


function miniMaxSum(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
 
let iguales = arr.every((n)=> n == arr[0])
if (iguales) {
    arr.pop()
    let sum = arr.reduce((a, b) => a + b)
    return console.log( sum + ' ' + sum )
}
let maxArr = arr.filter(e=> (e != min))
let minArr = arr.filter(e => (e != max))

let maxSum = maxArr.reduce((a, b) => a + b );
let minSum = minArr.reduce((a, b) => a + b );

return console.log(minSum + ' ' + maxSum); 
}

miniMaxSum(arr)