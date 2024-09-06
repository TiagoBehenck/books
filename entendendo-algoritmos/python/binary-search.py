def binarySearch(array, item):
    low = 0
    high = len(array) - 1
  
    while low <= high:
      mid = int((low + high) / 2)
      element = array[mid]
  
      if element == item:
        return mid
      elif element > item:
        high = mid - 1
      else:
        low = mid + 1
  
    return None
  
myArray = [1, 3, 5, 7, 9]

print(binarySearch(myArray, 3))
print(binarySearch(myArray, -1))