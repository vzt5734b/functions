var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
console.log("1 || 2 = "+(1 || 2));
const average = arr => arr.reduce((a, b) => a + b) / arr.length;