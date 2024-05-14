const results = await Promise.all(resultingPromises);
const isEmptyObject = obj => Object.keys(obj).length === 0;