const timeFromDate = date => date.toTimeString().slice(0, 8);
const arrayContains = (arr, element) => arr.includes(element);
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);