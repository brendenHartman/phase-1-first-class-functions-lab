function returnFirstTwoDrivers(arr){
    return [arr[0],arr[1]];
}

function returnLastTwoDrivers(arr) {
    const arrL = arr.length;
    return [arr[arrL-2],arr[arrL-1]];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function (fare) {return fare * int;};
}

function fareDoubler(fare) {
    const name = createFareMultiplier(2);
    return name(fare);
}

function fareTripler(fare) {
    const name = createFareMultiplier(3);
    return name(fare);
}

function selectDifferentDrivers(arr, fun) {
    return fun(arr);
}