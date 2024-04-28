console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const arrayContains = (arr, element) => arr.includes(element);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const uniqueArray = arr => [...new Set(arr)];
var pattern = {};
console.log( "A" - "B" + "2");