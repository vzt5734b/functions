const updated = numbers.filter(element => element > 6);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const allResults = await Promise.all(items.map(async (item) => {}));