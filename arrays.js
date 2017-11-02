var chocolateBars = [snickers, hundred grand, kitkat, skittles]

//does not alter the original array
function addElementToBeginningOfArray(array, newElement) {
  return [newElement, ...array]
}

//does alter the original array
function destructivelyAddElementToBeginningOfArray(array, newElement) {
  return array.unshift(newElement)
}

//does not alter the original array
function addElementToEndOfArray() {

}

//does alter the original array
function destructivelyAddElementToEndOfArray(){

}
