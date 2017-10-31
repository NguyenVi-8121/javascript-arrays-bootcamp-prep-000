var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo){
  const addElementToBeginningOfArray = ["foo", ...chocolateBars]
  return addElementToBeginningOfArray
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, foo){
  chocolateBars.unshift(foo)
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, foo){
  const addElementToEndOfArray = [...chocolateBars, "foo"]
  return addElementToEndOfArray
}
function destructivelyAddElementToEndOfArray(chocolateBars, foo){
  chocolateBars.push(foo)
  return chocolateBars
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars){
  const chocolateBars = chocolateBars.slice(1)
  return chocolateBars
}
function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()
  return chocolateBars
}
function removeElementFromEndOfArray(chocolateBars){
  chocolateBars.splice(-1)
  return chocolateBars
}
