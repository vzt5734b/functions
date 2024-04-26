const value = ( 5 < 7 ) ? "True" : "False" ;
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');