var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo){
  const addElementToBeginningOfArray= ["foo",...chocolateBars]
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
function accessElementInArray(chocolateBars, 2){
  accessElementInArray[2]
}
