// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue > 42) {(someValue = someValue - 42)}
    else {(someValue = 42 - someValue)}
    return someValue
  }

function distanceFromHqInFeet(someValue) {
  if (someValue > 42) {(someValue = (someValue - 42) * 264)}
  else {(someValue = (42 - someValue) * 264)}
  return someValue
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    let distanceTravelled
  if (start > destination) {distanceTravelled = ((start - destination) * 264)}
  else {distanceTravelled = ((destination - start) * 264)}
  return distanceTravelled
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let distanceTravelled
    let fare
    if (start > destination) {distanceTravelled = ((start - destination) * 264)}
    else {distanceTravelled = ((destination - start) * 264)}
    if (distanceTravelled < 400) fare = 0
    else if (distanceTravelled < 2000) fare = ((distanceTravelled - 400) * 0.02)
    else if (distanceTravelled < 2500) fare = 25
    else fare = "cannot travel that far"
    return fare
  }
    
    

    

 