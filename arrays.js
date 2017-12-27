var chocolateBars = ['snickers', 'hundred', 'grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, element){

  var newArr = arr

  return newArr.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(arr, element){

  return arr.unshift(element)
}
