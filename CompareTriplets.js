a = [1, 2, 3]
b = [3, 2, 1] 

function compareTriplets(a, b) {
  let aScore = 0
  let bScore = 0 
   for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
        bScore ++
    }
    else if (a[i] > b[i]){
        aScore ++
    }
  }
  return [aScore, bScore]
}
