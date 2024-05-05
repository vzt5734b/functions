const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const symbolsPath = path.join(buildOutputPath, 'symbols');