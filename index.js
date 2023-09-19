function distanceFromHqInBlocks(pickUpLocation) {
  if (pickUpLocation < 42){
    console.log(pickUpLocation);
    return(42 - pickUpLocation);
    
  }
  else {
console.log(pickUpLocation);
  return(pickUpLocation - 42);
}
  }

  function distanceFromHqInFeet(feet) {
    console.log(feet);
   return distanceFromHqInBlocks(feet) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(scuberLocation, pickUpLocation) {
    if (pickUpLocation > scuberLocation){
      console.log(pickUpLocation);
      console.log(scuberLocation);
      return((pickUpLocation - scuberLocation)*264);
    }
    else{
      console.log(pickUpLocation);
    console.log(scuberLocation);
      return((scuberLocation - pickUpLocation)*264);
    }
  }
  

  function calculatesFarePrice(scuberLocation, pickUpLocation) {
    let distanceInBlocks = distanceTravelledInFeet(scuberLocation,pickUpLocation);
  if (distanceInBlocks <= 400){
    console.log(distanceInBlocks);
    return 0;
  }
  if (distanceInBlocks >= 400 && distanceInBlocks <= 2000){
    console.log(distanceInBlocks);
    return (distanceInBlocks - 400)* 0.02;
  }
  else if(distanceInBlocks >= 2000 && distanceInBlocks <= 2500){
    console.log(distanceInBlocks);
    return 25;
  }
  else if (distanceInBlocks > 2500){
    console.log(distanceInBlocks);
    return "cannot travel that far";
  }
    //returns the fare for the customer
  }
