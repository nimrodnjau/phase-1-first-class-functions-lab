const returnFirstTwoDrivers = function (drivers) {
    drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
    drivers.slice(-2)
}  

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplyNum) {
    return function (num) {
      return multiplyNum * num;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };