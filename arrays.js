var chocolateBars = ['snickers', 'hundred', 'grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, element){

  var newArr = arr

  newArr.unshift(element)

  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, element){

  return arr.unshift(element)
}
