function binarySearch<T>(array: number[], item: number): number | undefined {
    let low = 0
    let high = array.length - 1
  
    while (low <= high) {
      const mid = Math.floor((low  + high) / 2)
      const element = array[mid]
  
      if (element === item) return mid
      if (element > item) high = mid - 1 
      else low = mid + 1
    }
  
    return undefined
}
  
const myArray = [1, 3, 5, 7, 9]

console.log(binarySearch(myArray, 3))
console.log(binarySearch(myArray, -1))
