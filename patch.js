const value = ( 5 < 7 ) ? "True" : "False" ;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');