def searchMinor(arr):
  minor = arr[0]
  minorIndex = 0
  for i in range(1, len(arr)):
    if arr[i] < minor:
      minor = arr[i]
      minorIndex = i

  return minorIndex


def selectionSort(arr):
  newArray = []
  
  while len(arr) > 0:
    menorIndex = searchMinor(arr)
    newArray.append(arr.pop(menorIndex))

  return newArray

print(selectionSort([5, 3, 6, 2, 10]))