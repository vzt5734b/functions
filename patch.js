const symbolsPath = path.join(buildOutputPath, 'symbols');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const merge = (a, b) => [...a, ...b];