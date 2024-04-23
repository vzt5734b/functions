const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const value = ( 5 < 7 ) ? "True" : "False" ;
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(typeof typeof 1);
console.log(1 +  "2" + "2");