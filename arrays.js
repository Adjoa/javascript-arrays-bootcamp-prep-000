var chocolateBars = [snickers, hundred grand, kitkat, skittles]

//does not alter the original array
function addElementToBeginningOfArray(array, newElement) {
  return [newElement, ...array]
}

//does alter the original array
function destructivelyAddElementToBeginningOfArray(array, newElement) {
  return array.unshift(newElement);
}

//does not alter the original array
function addElementToEndOfArray(array, newElement) {
  return [...array, newElement]
}

//does alter the original array
function destructivelyAddElementToEndOfArray(array, newElement){
  return array.push(newElement);
}
