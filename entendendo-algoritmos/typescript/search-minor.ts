function searchMinor(arr: number[]): number {
  let minor = arr[0]
  let minorIndex = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minor) {
      minor = arr[i]
      minorIndex = i
    }
}
return minorIndex
}

function selectionSort(arr: number[]): number[] {
  let newArray = []
  
  while (arr.length > 0) {
    const menorIndex = searchMinor(arr);
    newArray.push(arr.splice(menorIndex, 1)[0]);
  }

  return newArray
}

console.log(selectionSort([5, 3, 6, 2, 10]))