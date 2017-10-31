var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo){
  [foo , ...chocolateBars]
  return chocolateBars 
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
  chocolateBars.unshift(foo)
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, foo){
  const addElementToEndOfArray= [...chocolateBars,"foo"]
  return chocolateBars
}
function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  chocolateBars.push(foo)
  return chocolateBars
}
function accessElementInArray(chocolateBars){
  return chocolateBars[2]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift(0)
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars.slice(0)
  return chocolateBars
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop(chocolateBars.length - 1)
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars){
  chocolateBars.slice(chocolateBars.length - 1)
  return chocolateBars
}
