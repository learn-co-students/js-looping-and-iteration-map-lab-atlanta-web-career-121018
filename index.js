// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver){
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver){
    const driverArray = driver.split(" ")
    return {firstName: driverArray[0], lastName: driverArray[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver){
    return `${driver['name']} is from ${driver['hometown']}`
  })
}
