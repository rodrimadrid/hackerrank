const arr = [-4, 3, -9, 0, 4, 1]
function plusMinus(arr) {
  let arrP = []
  let arrN = []
  let arrZ = []
  for (let n = 0; n < arr.length; n++) {
      if (arr[n] > 0) {
          arrP.push(n)
      }
      else if (arr[n] < 0) {
          arrN.push(n)
      }
      else if (arr[n] === 0) {
        arrZ.push(n)
    }    
  }
  console.log((arrP.length / arr.length).toFixed(6));
  console.log((arrN.length / arr.length).toFixed(6));
  console.log((arrZ.length / arr.length).toFixed(6));

}
plusMinus(arr)