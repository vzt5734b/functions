const timeFromDate = date => date.toTimeString().slice(0, 8);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const lastElement = arr => arr[arr.length - 1];
const buildOutputPath = path.join(repositoryRootPath, 'out');