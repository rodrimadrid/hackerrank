function diagonalDifference(arr) {
    let diagonal1 = 0;
    let diagonal2 = 0;
    
    for (let i = 0 ; i<arr[0].length ; i++){
        diagonal1 += arr[i][i]
        diagonal2 += arr[i][arr.length - i - 1]
    }
    
    return Math.abs(diagonal1 - diagonal2)

}